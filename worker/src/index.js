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
 *
 * Environment variables (set via wrangler secret or Cloudflare dashboard)
 *   RESEND_API_KEY  — Resend API key for sending confirmation emails
 *   FROM_EMAIL      — Sender address, e.g. "SassaGold <waitlist@sassagold.com>"
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

/**
 * Send a confirmation email to a newly registered subscriber via Resend.
 * Fails silently when RESEND_API_KEY is not configured so the worker still
 * works in development / before an email provider is connected.
 */
async function sendConfirmationEmail(env, email) {
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) return;

  const from = env.FROM_EMAIL ?? 'SassaGold <waitlist@sassagold.com>';

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [email],
        subject: "You're on the SassaGold waitlist! 🎉",
        html: `
          <div style="font-family:sans-serif;max-width:480px;margin:0 auto;color:#111">
            <h2 style="color:#B8860B">Welcome to SassaGold!</h2>
            <p>You're officially on the waitlist. We'll reach out the moment we launch.</p>
            <p>Stay tuned — something amazing is coming.</p>
            <p style="color:#666;font-size:.85rem">
              You received this because you signed up at sassagold.com.<br/>
              If that wasn't you, you can safely ignore this email.
            </p>
            <p><em>— The SassaGold Team</em></p>
          </div>
        `,
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error(`Resend error ${res.status} for ${email}: ${body}`);
    }
  } catch (err) {
    console.error(`Failed to send confirmation email to ${email}:`, err);
  }
}

export default {
  async fetch(request, env, ctx) {
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
        return jsonResponse({ success: true, message: "You're already on the list!" });
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

      // Fire-and-forget — a failed email must not block the success response.
      ctx.waitUntil(sendConfirmationEmail(env, email));

      return jsonResponse({
        success: true,
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
