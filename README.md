# AIDS United — Design System

Source of truth for the AIDS United website redesign. Tokens, components, and patterns used
across the Webflow build.

## Links

| Where | URL |
|---|---|
| **Storybook (live)** | https://aids-united-ds.vercel.app *(deployed from `storybook-static/`)* |
| **Figma file** | https://www.figma.com/design/kKQfjDXn41Kt6FfZEQmoGK |
| **Project brief** | https://aids-united-project-brief.vercel.app |

## What's in here

```
.
├── tokens.json            ← single source of truth (colors, type, spacing)
├── tokens.css             ← CSS custom properties (importable)
├── stories/               ← Storybook stories (HTML framework)
│   ├── Introduction.mdx
│   ├── Foundations/       ← Colors, Typography, Spacing
│   ├── Components/        ← Button, Input, Card
│   ├── Patterns/          ← Header, Footer, Hero, Impact Stats, Donate CTA, Newsletter
│   └── Accessibility.stories.js
├── .storybook/            ← Storybook config
└── webflow/               ← original reference HTML pages + Webflow build guide
```

## Get started

```bash
npm install
npm run storybook
```

Then open http://localhost:6006

## Build for deploy

```bash
npm run build-storybook
```

Outputs to `storybook-static/` — ready for Vercel/Netlify static hosting.

## How this maps to Webflow

Every name in Figma → Storybook → tokens.json → Webflow lines up exactly. See
[`webflow/figma-webflow-sync.md`](./webflow/figma-webflow-sync.md) for the full naming map.

Example: the Figma swatch "Brand Red" = the Webflow swatch "Brand Red" =
`color.brand.brand-red` in tokens.json = `var(--brand-red)` in tokens.css = `#C42032`.

## Tech notes

This Storybook is built on the **HTML framework** — no React needed. Stories return HTML
strings. That matches the Webflow target (HTML + CSS) and keeps the system tech-agnostic.

The token JSON follows the [W3C Design Tokens Community Group format](https://design-tokens.github.io/community-group/format/),
so it can later be imported by Style Dictionary, exported to other platforms, or piped into
a coded design system if AIDS United ever ships a coded site.

## Hard rules (locked, no exceptions)

1. **No pink.** Ever. Not as tint, not as gradient.
2. **True brand red `#C42032`** — NOT the orange-red on the current site.
3. **No homemade-looking icons** — use a real icon set.
4. **8px button radius, 16px card radius.** Stay consistent.
5. **No sticky donate button** — header donate link is enough.
6. **Webflow Localization handles EN/ES** — don't bake English text into image assets.

## License

Apache-2.0 (consistent with mParticle Aquarium, the reference DS we drew patterns from).
