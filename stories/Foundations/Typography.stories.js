export default {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Type scale. Playfair Display for headings, Inter for body. Webflow classes match the names.' } },
  },
};

const SPECS = [
  { name: 'Heading H1',  webflow: 'heading-h1',  family: "'Playfair Display', serif", weight: 800, size: 62, lh: 1.05, ls: '-2.5px', color: 'var(--dark)',     sample: 'Care, dignity, action.' },
  { name: 'Heading H2',  webflow: 'heading-h2',  family: "'Playfair Display', serif", weight: 800, size: 40, lh: 1.15, ls: '-1px',   color: 'var(--dark)',     sample: 'Our work in the South.' },
  { name: 'Heading H3',  webflow: 'heading-h3',  family: "'Playfair Display', serif", weight: 800, size: 28, lh: 1.25, ls: '-0.5px', color: 'var(--dark)',     sample: 'Southern HIV Impact Fund' },
  { name: 'Stat Number', webflow: 'stat-number', family: "'Playfair Display', serif", weight: 800, size: 80, lh: 1,    ls: '-3px',   color: 'var(--brand-red)', sample: '$100M+' },
  { name: 'Eyebrow',     webflow: 'eyebrow',     family: "'Inter', sans-serif",       weight: 700, size: 12, lh: 1.4,  ls: '4px',    color: 'var(--brand-red)', sample: '— OUR WORK', upper: true },
  { name: 'Body Large',  webflow: 'body-large',  family: "'Inter', sans-serif",       weight: 400, size: 18, lh: 1.7,  ls: 0,        color: 'var(--medium-gray)', sample: 'AIDS United funds, supports, and advocates for community-led programs.' },
  { name: 'Body',        webflow: '(default)',   family: "'Inter', sans-serif",       weight: 400, size: 16, lh: 1.6,  ls: 0,        color: 'var(--dark-gray)', sample: 'Default body copy across the entire site.' },
  { name: 'Body Small',  webflow: 'body-small',  family: "'Inter', sans-serif",       weight: 400, size: 14, lh: 1.5,  ls: 0,        color: 'var(--medium-gray)', sample: 'Captions, meta info, footnotes.' },
  { name: 'Button',      webflow: '(btn class)', family: "'Inter', sans-serif",       weight: 700, size: 14, lh: 1,    ls: '1.5px',  color: 'var(--dark)',     sample: 'Donate now', upper: true },
];

function specimen(s) {
  return `
    <div style="display:flex; align-items:center; gap:48px; padding:32px; background:white; border:1px solid var(--border-gray); border-radius:8px;">
      <div style="flex:0 0 200px;">
        <div style="font-weight:700; font-size:13px; color:var(--dark);">${s.name}</div>
        <div style="font-family:monospace; font-size:11px; color:var(--medium-gray); margin-top:4px;">.${s.webflow}</div>
        <div style="font-size:11px; color:var(--medium-gray); margin-top:8px; font-family:monospace;">
          ${s.size}px · ${s.weight}<br>
          ${s.lh} lh · ${s.ls === 0 ? '0' : s.ls}
        </div>
      </div>
      <div style="
        flex:1;
        font-family:${s.family};
        font-weight:${s.weight};
        font-size:${s.size}px;
        line-height:${s.lh};
        letter-spacing:${s.ls};
        color:${s.color};
        ${s.upper ? 'text-transform:uppercase;' : ''}
      ">
        ${s.sample}
      </div>
    </div>
  `;
}

export const All = {
  name: 'All styles',
  render: () => `
    <div style="padding:48px; display:flex; flex-direction:column; gap:12px;">
      ${SPECS.map(specimen).join('')}
    </div>
  `,
};

export const Headings = {
  render: () => `<div style="padding:48px; display:flex; flex-direction:column; gap:12px;">${SPECS.slice(0,3).map(specimen).join('')}</div>`,
};

export const BodyText = {
  name: 'Body',
  render: () => `<div style="padding:48px; display:flex; flex-direction:column; gap:12px;">${SPECS.slice(5,8).map(specimen).join('')}</div>`,
};
