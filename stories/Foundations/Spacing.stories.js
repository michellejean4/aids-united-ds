export default {
  title: 'Foundations/Spacing',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Spacing scale for padding, margin, and gap. Stick to these — no custom values like 13 or 27.' } },
  },
};

const SCALE = [
  { name: '8',   px: 8,   note: '' },
  { name: '16',  px: 16,  note: '' },
  { name: '24',  px: 24,  note: '' },
  { name: '32',  px: 32,  note: '' },
  { name: '48',  px: 48,  note: '' },
  { name: '64',  px: 64,  note: '' },
  { name: '80',  px: 80,  note: 'default section padding' },
  { name: '100', px: 100, note: 'major section padding' },
  { name: '120', px: 120, note: '' },
];

export const Scale = {
  render: () => `
    <div style="padding:48px;">
      <div style="font-family:'Inter',sans-serif; font-size:12px; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:var(--brand-red); margin-bottom:8px;">— SPACING SCALE</div>
      <div style="font-family:'Playfair Display',serif; font-size:32px; font-weight:800; color:var(--dark); letter-spacing:-0.5px; margin-bottom:32px;">Spacing scale</div>
      <div style="display:flex; flex-direction:column; gap:12px;">
        ${SCALE.map(s => `
          <div style="display:flex; align-items:center; gap:24px;">
            <div style="flex:0 0 50px; font-weight:700; font-size:13px;">${s.name}</div>
            <div style="background:var(--brand-red); height:24px; width:${s.px}px; border-radius:2px;"></div>
            <div style="font-family:monospace; font-size:12px; color:var(--medium-gray);">${s.px}px${s.note ? ' · ' + s.note : ''}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `,
};

export const Radii = {
  render: () => `
    <div style="padding:48px;">
      <div style="font-family:'Inter',sans-serif; font-size:12px; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:var(--brand-red); margin-bottom:8px;">— RADII</div>
      <div style="font-family:'Playfair Display',serif; font-size:32px; font-weight:800; color:var(--dark); letter-spacing:-0.5px; margin-bottom:32px;">Corner radii</div>
      <div style="display:flex; gap:32px;">
        ${[
          { name: 'Button · 8px',  r: 8,   use: 'Buttons, inputs, small surfaces' },
          { name: 'Card · 16px',   r: 16,  use: 'Cards, large containers' },
          { name: 'Pill · pill',   r: 999, use: 'Pills, badges, status tags' },
        ].map(r => `
          <div>
            <div style="background:var(--light-gray); border:1px solid var(--border-gray); width:200px; height:120px; border-radius:${r.r}px;"></div>
            <div style="font-weight:700; font-size:13px; margin-top:12px;">${r.name}</div>
            <div style="font-size:12px; color:var(--medium-gray); margin-top:4px;">${r.use}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `,
};

export const Shadows = {
  render: () => `
    <div style="padding:48px;">
      <div style="font-family:'Inter',sans-serif; font-size:12px; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:var(--brand-red); margin-bottom:8px;">— SHADOWS</div>
      <div style="font-family:'Playfair Display',serif; font-size:32px; font-weight:800; color:var(--dark); letter-spacing:-0.5px; margin-bottom:32px;">Elevation</div>
      <div style="display:flex; gap:32px; padding:32px 0;">
        ${[
          { name: 'sm', use: 'Resting elevation',         shadow: 'var(--shadow-sm)' },
          { name: 'md', use: 'Cards, dropdowns',          shadow: 'var(--shadow-md)' },
          { name: 'lg', use: 'Card hover lift, modals',   shadow: 'var(--shadow-lg)' },
        ].map(s => `
          <div>
            <div style="background:white; width:200px; height:120px; border-radius:16px; box-shadow:${s.shadow};"></div>
            <div style="font-weight:700; font-size:13px; margin-top:16px;">Shadow / ${s.name}</div>
            <div style="font-size:12px; color:var(--medium-gray); margin-top:4px;">${s.use}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `,
};
