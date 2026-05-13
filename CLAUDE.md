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

## Project rule: custom CSS defaults always in `@layer base`

Tailwind v4 uses **CSS cascade layers**. Tailwind utilities live in the
`utilities` layer. Any custom rule placed **outside any `@layer`** ends up
in an unnamed final layer that wins over every Tailwind utility, regardless
of selector specificity. This pattern has shipped two invisible-CTA bugs
already (white text on brand-blue pill, overridden by `.site-theme a {color:
var(--ft-site-brand)}`).

Rule: every custom CSS rule in [src/app/globals.css](src/app/globals.css)
that defines **defaults** (heading color, link color, body styling for a
theme wrapper, etc.) **MUST** be wrapped in `@layer base { … }`.

```css
/* Wrong — wins over text-white utility, breaks CTAs */
.site-theme a { color: var(--ft-site-brand); }

/* Right — utilities can still override */
@layer base {
  .site-theme a { color: var(--ft-site-brand); }
}
```

`:where()` for zero specificity is **not enough** — layer order wins
over specificity in Tailwind v4. Always use `@layer base` for defaults.

Exception: animation keyframes and one-off utility classes (e.g.
`.fade-in`) can stay outside layers if they don't conflict with Tailwind
utilities.

<!-- a11y-agent-team: start -->
# Accessibility-First Development

This project enforces WCAG AA accessibility standards for all web UI code.

## Hook-Based Enforcement

Accessibility review is enforced by three global hooks:

1. **Proactive detection** (`UserPromptSubmit`) — Detects web projects and injects the delegation instruction on every prompt.
2. **Edit gate** (`PreToolUse`) — Blocks Edit/Write to UI files until accessibility-lead has been consulted. Uses `permissionDecision: "deny"`.
3. **Session marker** (`PostToolUse`) — Unlocks the edit gate after accessibility-lead completes.

If an edit is blocked, delegate to `accessibility-agents:accessibility-lead` first.

## Mandatory Accessibility Check

Before writing or modifying any web UI code - including HTML, JSX, CSS, React components, Tailwind classes, web pages, forms, modals, or any user-facing web content - you MUST:

1. Consider which accessibility specialist agents are needed for the task
2. Apply the relevant specialist knowledge before generating code
3. Verify the output against the appropriate checklists

**Automatic trigger detection:** If a user prompt involves creating, editing, or reviewing any file matching `*.html`, `*.jsx`, `*.tsx`, `*.vue`, `*.svelte`, `*.astro`, or `*.css` - or if the prompt describes building UI components, pages, forms, or visual elements - treat it as a web UI task and apply the Decision Matrix below.

## Available Specialist Agents

| Agent | When to Use |
|-------|------------|
| accessibility-lead | Any UI task - coordinates all specialists and runs final review |
| aria-specialist | Interactive components, custom widgets, ARIA usage |
| modal-specialist | Dialogs, drawers, popovers, overlays |
| contrast-master | Colors, themes, CSS styling, visual design |
| keyboard-navigator | Tab order, focus management, keyboard interaction |
| live-region-controller | Dynamic content updates, toasts, loading states |
| forms-specialist | Forms, inputs, validation, error handling, multi-step wizards |
| alt-text-headings | Images, alt text, SVGs, heading structure, page titles, landmarks |
| tables-data-specialist | Data tables, sortable tables, grids, comparison tables |
| link-checker | Ambiguous link text, "click here"/"read more" detection |
| cognitive-accessibility | WCAG 2.2 cognitive SC, COGA guidance, plain language |
| mobile-accessibility | React Native, Expo, iOS, Android - touch targets, screen readers |
| design-system-auditor | Color token contrast, focus ring tokens, spacing tokens |
| web-accessibility-wizard | Full guided web accessibility audit |
| document-accessibility-wizard | Document audit for .docx, .xlsx, .pptx, .pdf |
| office-remediator | Programmatic Office document (Word/Excel/PowerPoint) remediation |
| markdown-a11y-assistant | Markdown audit - links, headings, emoji, tables |
| testing-coach | Screen reader testing, keyboard testing, automated testing |
| wcag-guide | WCAG 2.2 criteria explanations, conformance levels |

## Commands

Type `/` followed by a command name to invoke the corresponding specialist directly:

| Command | Specialist | Purpose |
|-------|-----------|---------|
| `/aria` | aria-specialist | ARIA patterns - roles, states, properties |
| `/contrast` | contrast-master | Color contrast - ratios, themes, visual design |
| `/keyboard` | keyboard-navigator | Keyboard nav - tab order, focus, shortcuts |
| `/forms` | forms-specialist | Forms - labels, validation, error handling |
| `/alt-text` | alt-text-headings | Images/headings - alt text, hierarchy, landmarks |
| `/tables` | tables-data-specialist | Tables - headers, scope, caption, sorting |
| `/links` | link-checker | Links - ambiguous text detection |
| `/modal` | modal-specialist | Modals - focus trap, return, escape |
| `/live-region` | live-region-controller | Live regions - dynamic announcements |
| `/audit` | web-accessibility-wizard | Full guided web accessibility audit |
| `/document` | document-accessibility-wizard | Document audit - Word, Excel, PPT, PDF |
| `/markdown` | markdown-a11y-assistant | Markdown audit - links, headings, emoji |
| `/test` | testing-coach | Testing - screen reader, keyboard, automated |
| `/wcag` | wcag-guide | WCAG reference - criteria explanations |
| `/cognitive` | cognitive-accessibility | Cognitive a11y - COGA, plain language |
| `/mobile` | mobile-accessibility | Mobile - React Native, touch targets |
| `/design-system` | design-system-auditor | Tokens - contrast, focus rings, spacing |

## Decision Matrix

- **New component or page:** Always apply aria-specialist + keyboard-navigator + alt-text-headings. Add forms-specialist for inputs, contrast-master for styling, modal-specialist for overlays, live-region-controller for dynamic updates, tables-data-specialist for data tables.
- **Modifying existing UI:** At minimum apply keyboard-navigator. Add others based on what changed.
- **Code review/audit:** Apply all specialist checklists. Use web-accessibility-wizard for guided audits.
- **Document audit:** Use document-accessibility-wizard for Office and PDF accessibility audits.
- **Mobile app:** Use mobile-accessibility for touch targets, labels, and screen reader compatibility.
- **Cognitive / UX clarity:** Use cognitive-accessibility for WCAG 2.2 SC 3.3.7, 3.3.8, 3.3.9, COGA guidance.
- **Design system / tokens:** Use design-system-auditor to validate color token pairs, focus ring tokens, spacing tokens.
- **Data tables:** Always apply tables-data-specialist.
- **Links:** Always apply link-checker when pages contain hyperlinks.
- **Images or media:** Always apply alt-text-headings.

## Non-Negotiable Standards

- Semantic HTML before ARIA (`<button>` not `<div role="button">`)
- One H1 per page, never skip heading levels
- Every interactive element reachable and operable by keyboard
- Text contrast 4.5:1, UI component contrast 3:1
- No information conveyed by color alone
- Focus managed on route changes, dynamic content, and deletions
- Modals trap focus and return focus on close
- Live regions for all dynamic content updates

For tasks that do not involve any user-facing web content (backend logic, scripts, database work), these requirements do not apply.
<!-- a11y-agent-team: end -->

