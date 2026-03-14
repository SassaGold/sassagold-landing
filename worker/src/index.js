/**
 * SassaGold Waitlist & Analytics Worker
 *
 * Routes
 *   POST /api/waitlist         — register an email address
 *   GET  /api/waitlist/count   — return public subscriber count
 *   POST /api/pageview         — lightweight analytics ping
 *
 * KV namespace binding: WAITLIST
 *   Keys
 *     email:<address>  → JSON { email, joinedAt, position }
 *     count            → stringified integer
 *     pageview:<YYYY-MM-DD> → stringified integer (90-day TTL)
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

/**
 * Structural email validation — no regex with nested quantifiers, immune to ReDoS.
 * Checks: single @, non-empty local/domain parts, no consecutive/leading/trailing
 * dots, presence of a dot in the domain, and length limits per RFC 5321.
 */
function isValidEmail(email) {
  if (typeof email !== 'string' || email.length > 254 || /\s/.test(email)) return false;
  const at = email.lastIndexOf('@');
  if (at < 1 || email.indexOf('@') !== at) return false; // missing or multiple @
  const local  = email.slice(0, at);
  const domain = email.slice(at + 1);
  if (local.length > 64 || !domain.includes('.')) return false;
  if (local.startsWith('.') || local.endsWith('.') || local.includes('..')) return false;
  if (domain.startsWith('.') || domain.endsWith('.') || domain.includes('..')) return false;
  return true;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // ── POST /api/waitlist ────────────────────────────────────────────────────
    if (pathname === '/api/waitlist' && request.method === 'POST') {
      let body;
      try {
        body = await request.json();
      } catch {
        return jsonResponse({ error: 'Invalid JSON body.' }, 400);
      }

      const email = (body.email ?? '').toString().trim().toLowerCase();

      if (!isValidEmail(email)) {
        return jsonResponse({ error: 'Please provide a valid email address.' }, 400);
      }

      // Deduplicate
      const existing = await env.WAITLIST.get(`email:${email}`);
      if (existing) {
        return jsonResponse({ ok: true, message: "You're already on the list!" });
      }

      // Increment counter
      // Note: KV does not support atomic read-modify-write, so under very high
      // concurrent traffic positions could occasionally be non-sequential.
      // For a launch waitlist this is an acceptable tradeoff; upgrade to
      // Durable Objects if strict ordering is required.
      const countStr = (await env.WAITLIST.get('count')) ?? '0';
      const position = parseInt(countStr, 10) + 1;

      await env.WAITLIST.put(
        `email:${email}`,
        JSON.stringify({ email, joinedAt: new Date().toISOString(), position }),
      );
      await env.WAITLIST.put('count', String(position));

      return jsonResponse({
        ok: true,
        message: "You're on the list! We'll be in touch.",
        position,
      });
    }

    // ── GET /api/waitlist/count ───────────────────────────────────────────────
    if (pathname === '/api/waitlist/count' && request.method === 'GET') {
      const countStr = (await env.WAITLIST.get('count')) ?? '0';
      return jsonResponse({ count: parseInt(countStr, 10) });
    }

    // ── POST /api/pageview ────────────────────────────────────────────────────
    if (pathname === '/api/pageview' && request.method === 'POST') {
      const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
      const key = `pageview:${today}`;
      const current = parseInt((await env.WAITLIST.get(key)) ?? '0', 10);
      // Keep 90 days of daily pageview data
      await env.WAITLIST.put(key, String(current + 1), {
        expirationTtl: 90 * 24 * 60 * 60,
      });
      return jsonResponse({ ok: true });
    }

    return jsonResponse({ error: 'Not found.' }, 404);
  },
};
