# Rungables website

This repository is a starter Next.js app for a website that can securely connect to the Heylo API through a server-side proxy.

## Stack

- Next.js
- React
- Vercel-ready for free hosting

## Prerequisites

- Node.js 18+
- npm
- A Heylo API key

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the sample environment file:

   ```bash
   cp .env.example .env.local
   ```

3. Fill in your environment values in `.env.local`:

   ```bash
   HEYLO_API_KEY=your_heylo_api_key_here
   HEYLO_BASE_URL=https://api.heylo.com
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open http://localhost:3000

## Production deployment

This is designed to be deployed to Vercel for free. After connecting the repository to Vercel, add the same environment variables in the Vercel dashboard:

- `HEYLO_API_KEY`
- `HEYLO_BASE_URL`

## Security

- Keep the Heylo API key on the server.
- Do not expose API keys in browser code.
- Use a secure reverse proxy pattern like `/api/heylo/fetch` instead of direct browser calls.

## Heylo

Official docs: https://www.heylo.com/help/api

## Basic API usage

The endpoint `/api/heylo/fetch` can act as a proxy. You can pass a path or query parameters to forward to Heylo.

Example:

```bash
curl http://localhost:3000/api/heylo/fetch?path=/v1/your-endpoint
```

## Notes

The default API route is intentionally simple and can be extended to:

- authenticate requests,
- validate payloads,
- cache responses,
- add rate limiting,
- support webhooks.
