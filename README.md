# SassaGold-Studio Landing Page

Coming-soon landing page for the SassaGold-Studio product launch.

## 🚀 Making Changes Live on sassagold.com

**The site at sassagold.com is deployed by Cloudflare Pages from the `main` branch.**

All improvements (premium design, waitlist backend, analytics) are ready in this
repository. To make them appear on the live site:

1. Open [Pull Request #4](https://github.com/SassaGold/sassagold-landing/pull/4) on GitHub
2. Click **"Ready for review"** (to un-draft the PR)
3. Click **"Merge pull request"** → **"Confirm merge"**
4. Cloudflare Pages will automatically redeploy within ~30 seconds

> **Why nothing changed:** Copilot's work lives in a Pull Request (a separate branch).
> Changes only appear on the live site after the PR is merged into `main`.

---

## What's Included

### Premium Design (`index.html` + `styles.css`)
- Animated gold particle field behind the hero
- Pulsing gold-glow logo animation
- Gold gradient headline text
- Glassmorphism feature cards with hover lift
- Fade-up entrance animations

### Waitlist Backend (`worker/`)
A Cloudflare Worker that stores emails in KV:

| Route | Purpose |
|---|---|
| `POST /api/waitlist` | Register email, return position |
| `GET /api/waitlist/count` | Public subscriber count |
| `POST /api/pageview` | Daily analytics (90-day TTL) |

**To deploy the Worker:**
```bash
cd worker
# 1. Create the KV namespace
npx wrangler kv namespace create WAITLIST
# 2. Paste the returned IDs into wrangler.toml
# 3. Deploy
npm install && npm run deploy
```
Then update `const API = '/api'` in `index.html` to your `*.workers.dev` URL,
or configure a Cloudflare Pages route (`/api/*`) pointing at the Worker.

---

## Local Development

```bash
npm install
# Rebuild Tailwind CSS after editing HTML classes:
echo '@import "tailwindcss";' > input.css && \
  node_modules/.bin/tailwindcss -i input.css -o styles.css --minify && \
  rm input.css
```
