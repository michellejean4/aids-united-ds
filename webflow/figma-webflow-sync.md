# Figma ↔ Webflow ↔ Tokens — Naming Map

How names line up across all three systems for the AIDS United build.

**Figma file:** https://www.figma.com/design/kKQfjDXn41Kt6FfZEQmoGK
**Tokens JSON:** `./tokens.json`
**Webflow setup guide:** `./webflow-setup-guide.md`

---

## Colors

| Figma swatch | Webflow swatch | tokens.json | Hex |
|---|---|---|---|
| Brand Red | Brand Red | `color.brand.brand-red` | `#C42032` |
| Red Dark | Red Dark | `color.brand.red-dark` | `#A01A2A` |
| Red Light | Red Light | `color.brand.red-light` | `#F9F0F0` |
| Brand Blue | Brand Blue | `color.brand.brand-blue` | `#3C73A1` |
| Blue Dark | Blue Dark | `color.brand.blue-dark` | `#1A6BA9` |
| Blue Light | Blue Light | `color.brand.blue-light` | `#E8F0F7` |
| Dark | Dark | `color.neutral.dark` | `#1A1A1A` |
| Dark Gray | Dark Gray | `color.neutral.dark-gray` | `#333333` |
| Medium Gray | Medium Gray | `color.neutral.medium-gray` | `#666666` |
| Light Gray | Light Gray | `color.neutral.light-gray` | `#F5F5F5` |
| Border Gray | Border Gray | `color.neutral.border-gray` | `#E0E0E0` |
| White | White | `color.neutral.white` | `#FFFFFF` |

✅ All names match exactly. Pick the swatch by name in Figma → use the same swatch name in Webflow.

---

## Typography

Figma uses designer-friendly Title Case ("Heading H1"); Webflow uses CSS kebab-case classes ("heading-h1"). Same thing, different conventions.

| Figma text style | Webflow class | Use |
|---|---|---|
| Heading H1 | `heading-h1` | Hero headlines |
| Heading H2 | `heading-h2` | Section titles |
| Heading H3 | `heading-h3` | Card titles |
| Stat Number | `stat-number` | Impact stats |
| Eyebrow | `eyebrow` | Small uppercase label |
| Body Large | `body-large` | Lead body, intros |
| Body | (body default — no class needed) | Default 16px body |
| Body Small | `body-small` | Captions, meta |
| Button | (built into `btn` class) | Button label |

**Font weights** in Figma:
- Playfair Display uses `"ExtraBold"` (no space)
- Inter uses `"Extra Bold"` (with space) and `"Semi Bold"` (with space)
- This is a Figma quirk — Webflow doesn't have this distinction.

---

## Spacing

Figma variable name = Webflow value. Pick the variable, get the px.

| Figma var | Value | tokens.json |
|---|---|---|
| Spacing/8 | 8px | `spacing.8` |
| Spacing/16 | 16px | `spacing.16` |
| Spacing/24 | 24px | `spacing.24` |
| Spacing/32 | 32px | `spacing.32` |
| Spacing/48 | 48px | `spacing.48` |
| Spacing/64 | 64px | `spacing.64` |
| Spacing/80 | 80px (default section padding) | `spacing.80` |
| Spacing/100 | 100px (major section padding) | `spacing.100` |
| Spacing/120 | 120px | `spacing.120` |

**Rule:** never invent values outside this scale (no 13, 27, 50).

---

## Radii

| Figma var | Webflow value | Use |
|---|---|---|
| Radius/Button | 8px | Buttons, inputs, small surfaces |
| Radius/Card | 16px | Cards, large containers |
| Radius/Pill | 999px | Pills, badges, status tags |

---

## Shadows

| Figma effect style | Use |
|---|---|
| Shadow / sm | Resting elevation |
| Shadow / md | Cards, dropdowns |
| Shadow / lg | Card hover lift, modals |

---

## Components / Symbols

| Figma component | Webflow Symbol name | Notes |
|---|---|---|
| Header / Nav | `nav-header` | Set as Webflow Symbol — used on every page |
| Footer | `footer` | Set as Webflow Symbol — used on every page |
| Hero / Split-panel | `hero-split` | Section, not Symbol (per-page content varies) |
| Impact stats | `impact-stats` | Symbol — same content homepage + program pages |
| Section template | (don't symbolize) | Reference for building section structure |
| Donate CTA card | `donate-cta-card` | Symbol — used on homepage + donate page |
| (button) | `btn` + `btn-primary` / `btn-secondary` / `btn-blue` / `btn-ghost-dark` | Combo class system |
| (input) | `input` | Single class, focus state via state styles |
| (card) | `card` + `card-image` + `card-body` | 3-class system |

---

## Hard rules (locked, no exceptions)

These come from direct client decisions. Same rules in Figma, Webflow, and code:

1. **No pink.** Ever. Not as tint, not as gradient.
2. **True brand red `#C42032`** — NOT the orange-red on the current site.
3. **No homemade-looking icons** — use a real icon set (Lucide, Phosphor, etc).
4. **8px button radius, 16px card radius.** Stay consistent.
5. **No sticky donate button** — header donate link is enough.
6. **Webflow Localization handles EN/ES** — don't bake English text into image assets.

---

## When in doubt

- **Color:** if a hex looks "almost right," it's probably wrong. Always reference the swatch by name.
- **Spacing:** if Webflow won't let you pick the variable, the parent isn't auto-layout — fix the parent first.
- **Font:** if text looks wrong in Figma, check the font style string ("ExtraBold" vs "Extra Bold" — yes, really).
- **Component edits:** edit the main Component in Figma, not the instance. In Webflow, edit the Symbol, not the instance.
