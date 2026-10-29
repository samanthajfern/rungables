# Run Gables website

The site for [rungables.com](https://rungables.com): Run Gables, a community run club in Coral Gables. Every Tuesday, 7pm, Le Parc Cafe.

Built with Next.js as a fully static site (`output: 'export'`) and hosted on Cloudflare Workers static assets. Every push to `main` deploys automatically.

## Editing the site

| To change | Edit |
| --- | --- |
| RSVP link, Instagram, Strava, email, Maps link, partners | `lib/site.js` |
| Header photo | Save it in `public/` as `group-1600.jpg`, `group-2400.jpg` and `group-3200.jpg` (those widths, landscape), then update `groupPhoto` sizes in `lib/site.js` |
| Photos between sections | Add a landscape image (2000px wide) to `public/` and an entry to `photos` in `lib/site.js`; `after` picks the section it follows |
| Hero copy and stats | `components/Hero.js` |
| About cards | `components/About.js` |
| Tuesday schedule and meet spot | `components/WhenWhere.js` |
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
