# Run Gables website

The site for [rungables.com](https://rungables.com): Run Gables, a community run club in Coral Gables. Every Tuesday, 7pm, Le Parc Cafe.

Built with Next.js as a fully static site (`output: 'export'`) and hosted on Cloudflare Workers static assets. Every push to `main` deploys automatically.

## Editing the site

| To change | Edit |
| --- | --- |
| RSVP link, Instagram, Strava, email, partners, link preview / Google description | `lib/site.js` |
| Meet spot tabs (Le Parc, The Plaza, Bay 13): name, address, routes, note | `venues` in `lib/site.js`; the first one opens by default |
| Header photo | Save a landscape photo in `public/` at three widths: `name-1600.jpg`, `name-2400.jpg`, `name-3200.jpg`. Then set `heroPhoto.base` to `/name` in `lib/site.js` |
| Photos between sections | Same three widths, then add an entry to `photos` in `lib/site.js`; `after` picks the section it follows, `flow: true` blends it into both sections |
| Hero copy and stats | `components/Hero.js` |
| About cards | `components/About.js` |
| Tuesday schedule | `components/WhenWhere.js` |
| Favicon | `public/favicon.ico`, `public/icon-192.png`, `public/icon-512.png` (the logo on a black circle) |
| Upcoming runs list (Fuku night logic) | `components/UpcomingRuns.js` |
| Colors and fonts | the `:root` block at the top of `styles/globals.css` |

The upcoming runs list is generated in the visitor's browser from today's date, so it never goes stale and needs no weekly edits.

## Local development

Requires Node 22+ (Wrangler 4 needs it).

```bash
npm install
npm run dev        # http://localhost:3000, live reload
npm run build      # writes the static site to out/
npm run preview    # build, then serve out/ through Cloudflare's local runtime
```

## Deploys

Cloudflare builds from GitHub using:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` (reads `wrangler.jsonc`, uploads `out/`)
- Environment variable: `NODE_VERSION=22`

To deploy by hand from your machine: `npx wrangler login` once, then `npm run deploy`.

## Heylo

The earlier Heylo API proxy was removed before launch. It forwarded requests, with the API key attached, to any URL a visitor supplied. If Heylo data is added later, use a Cloudflare Worker route that calls one fixed Heylo endpoint with GET only and keeps the key in a Worker secret.
