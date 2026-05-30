export default {
  title: 'Accessibility',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'WCAG 2.1 AA is the bar. Color contrast pairs + the interactive-element checklist.' } },
  },
};

const PAIRS = [
  { label: 'Dark on White',         bg:'#FFFFFF', fg:'#1A1A1A', sample:'Aa · Body',      ratio:'17.4:1', status:'✓ AAA' },
  { label: 'Dark Gray on White',    bg:'#FFFFFF', fg:'#333333', sample:'Aa · Body',      ratio:'12.6:1', status:'✓ AAA' },
  { label: 'Medium Gray on White',  bg:'#FFFFFF', fg:'#666666', sample:'Aa · Body',      ratio:'5.7:1',  status:'✓ AA' },
  { label: 'White on Brand Red',    bg:'#C42032', fg:'#FFFFFF', sample:'DONATE',          ratio:'4.6:1',  status:'✓ AA' },
  { label: 'White on Dark',         bg:'#1A1A1A', fg:'#FFFFFF', sample:'Aa · Headline',  ratio:'17.4:1', status:'✓ AAA' },
  { label: 'Brand Red on White',    bg:'#FFFFFF', fg:'#C42032', sample:'— EYEBROW',       ratio:'4.6:1',  status:'✓ AA' },
];

const CHECKLIST = [
  { title: 'Visible focus state', body: 'Every button, link, input, and dropdown needs a visible 2px outline (Brand Red on light, white on dark). Never `outline: none` without a custom replacement.' },
  { title: 'Keyboard navigation', body: 'Tab order follows visual order. Skip-to-content link at the top of every page. Dropdowns: Enter/Space to open, Escape to close.' },
  { title: 'Alt text on every image', body: 'Photos: describe the scene. Icons: describe the meaning, not the visual. Decorative: `alt=""` (empty, not missing).' },
  { title: 'Form labels', body: 'Never placeholder-as-label. Every input needs a visible `<label>`. Errors shown in text, not just color.' },
  { title: 'Touch targets', body: 'Minimum 44×44px for buttons and tap targets on mobile. Don\'t cluster small targets within 8px of each other.' },
  { title: 'Semantic HTML', body: 'Use real `<button>` elements, not styled `<div>`s. Use `<h1>`–`<h6>` in order. Lists in `<ul>`/`<ol>`.' },
  { title: 'Localization-ready', body: 'Webflow Localization swaps text strings — never bake English text into image assets. Use text overlays or SVG with editable copy.' },
  { title: 'No animation traps', body: 'Respect `prefers-reduced-motion`. Carousels and counters should pause and not auto-rotate aggressively.' },
];

export const ContrastPairs = {
  name: 'Contrast pairs',
  render: () => `
    <div style="padding:48px; font-family:'Inter',sans-serif;">
      <div style="font-size:12px; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:var(--brand-red); margin-bottom:8px;">— CONTRAST</div>
      <h2 style="font-family:'Playfair Display',serif; font-weight:800; font-size:32px; letter-spacing:-0.5px; margin:0 0 12px;">Color contrast pairs</h2>
      <p style="font-size:14px; color:var(--medium-gray); margin:0 0 32px;">AA: 4.5:1 normal, 3:1 large. AAA: 7:1 normal, 4.5:1 large.</p>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:12px;">
        ${PAIRS.map(p => `
          <div style="border:1px solid var(--border-gray); border-radius:8px; overflow:hidden;">
            <div style="background:${p.bg}; padding:32px; text-align:center; color:${p.fg}; font-weight:700; font-size:18px;">${p.sample}</div>
            <div style="padding:14px 16px; background:white;">
              <div style="font-weight:700; font-size:13px;">${p.label}</div>
              <div style="font-family:monospace; font-size:11px; color:var(--medium-gray); margin-top:4px;">${p.ratio} · ${p.status}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `,
};

export const Checklist = {
  render: () => `
    <div style="padding:48px; font-family:'Inter',sans-serif;">
      <div style="font-size:12px; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:var(--brand-red); margin-bottom:8px;">— THE CHECKLIST</div>
      <h2 style="font-family:'Playfair Display',serif; font-weight:800; font-size:32px; letter-spacing:-0.5px; margin:0 0 32px;">Every interactive element needs…</h2>
      <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:16px;">
        ${CHECKLIST.map(c => `
          <div style="background:var(--light-gray); padding:24px; border-radius:8px;">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
              <span style="width:8px; height:8px; background:var(--brand-red); border-radius:999px;"></span>
              <strong style="font-size:15px;">${c.title}</strong>
            </div>
            <div style="font-size:14px; line-height:1.6; color:var(--medium-gray);">${c.body}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `,
};
