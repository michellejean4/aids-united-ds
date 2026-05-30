# Webflow build reference

This folder holds the original Webflow build artifacts and the Figma↔Webflow naming map.

## In this folder

- **figma-webflow-sync.md** — the full naming map across Figma, Webflow, and tokens.json. Read this first.

## Original reference files (not committed — local-only)

The proposal-phase HTML comps live in `~/Downloads/aids-united-site/`:
- `design-system.html` — visual styleguide (open in a browser)
- `index.html`, `about.html`, `grantmaking.html` — homepage / about / grantmaking comps
- `webflow-setup-guide.md` — step-by-step Webflow project setup

They aren't bundled into this repo, but the Storybook covers the same ground — the live URL at
`aids-united-ds.vercel.app` is the canonical reference.

## Webflow Symbol mapping

| Build as Webflow Symbol | Storybook path |
|---|---|
| `nav-header` | Patterns / Header |
| `footer` | Patterns / Footer |
| `donate-cta-card` | Patterns / Donate CTA |
| `newsletter-signup` | Patterns / Newsletter |

Section blocks (hero, impact stats, etc.) should usually NOT be Symbols because their content
changes per page — but their styling and structure follow the Storybook pattern exactly.
