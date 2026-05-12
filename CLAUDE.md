@AGENTS.md

## Project rule: analytics counter on every page

Every public page in this MVP MUST load the Fintablo Analyst counter
(`analyst.fintablo.ru`, apiKey `apiKey-PeblK5cQmecxkFlCLYC4KrNneo0BiluLLd7lx3lie6bQABFw`).

How this is enforced:

1. Default loader is mounted in [src/app/layout.tsx](src/app/layout.tsx) as
   `<FintabloAnalystScript />`. Root layout wraps every route, so any new
   `src/app/**/page.tsx` inherits the counter automatically.
2. Build-time check: `scripts/verify-analytics.mjs` runs as `postbuild`
   (see [package.json](package.json) → `scripts.postbuild`). It walks
   `out/**/*.html`, asserts each page contains both the analyst script URL
   and the API key. CI build fails if any page is missing the counter.
3. CI is unchanged — `npm run build` already includes the postbuild check,
   so [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)
   will fail before deploy on any regression.

When creating a new page:

- Add `src/app/<route>/page.tsx` as usual — do nothing special, the counter
  is inherited.
- Do NOT override `head` or wrap content in an alternate layout that omits
  `<FintabloAnalystScript />`.
- Do NOT add per-page `<head>` blocks that remove the script.

If a page MUST not have the counter (rare, e.g. legal disclaimer with no JS):

- Add its build-output relative path (e.g. `legal/index.html`) to the
  `EXEMPT` set in [scripts/verify-analytics.mjs](scripts/verify-analytics.mjs).
- Add a comment in the same commit explaining why the exemption is correct.
- Note it in the deploy PR.

Counter rule applies to ALL routes — landings, routers, tour pages, 404,
not-found. Treat it like CSS reset: assumed present, never optional.
