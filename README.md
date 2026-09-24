# Stroyo.cz

Coming-soon site for Stroyo, a Czech marketplace for renting and buying tools, garden equipment and construction machinery.

Czech lives at `/`. English lives at `/en`.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Import the repository in Vercel. The framework preset is Next.js.

Optional environment variable: `WAITLIST_WEBHOOK_URL`. When set, signup emails are sent there. Without it, signups are written to the server log. The public address on the page is `hello@stroyo.cz` (`contactEmail` in `lib/content.ts`).
