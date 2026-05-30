export default {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Brand and neutral color swatches. Names match Figma swatches and Webflow swatch names exactly.' } },
  },
};

const SWATCHES = {
  brand: [
    { name: 'Brand Red',   hex: '#C42032', cssVar: '--brand-red',  use: 'Primary buttons, eyebrows, accents' },
    { name: 'Red Dark',    hex: '#A01A2A', cssVar: '--red-dark',   use: 'Hover state for Brand Red' },
    { name: 'Red Light',   hex: '#F9F0F0', cssVar: '--red-light',  use: 'Soft red backgrounds. NEVER pink.' },
    { name: 'Brand Blue',  hex: '#3C73A1', cssVar: '--brand-blue', use: 'Donations, info accents' },
    { name: 'Blue Dark',   hex: '#1A6BA9', cssVar: '--blue-dark',  use: 'Hover state for Brand Blue' },
    { name: 'Blue Light',  hex: '#E8F0F7', cssVar: '--blue-light', use: 'Info section backgrounds' },
  ],
  neutral: [
    { name: 'Dark',         hex: '#1A1A1A', cssVar: '--dark',         use: 'Headings, dark backgrounds' },
    { name: 'Dark Gray',    hex: '#333333', cssVar: '--dark-gray',    use: 'Default body text' },
    { name: 'Medium Gray',  hex: '#666666', cssVar: '--medium-gray',  use: 'Secondary text, captions' },
    { name: 'Light Gray',   hex: '#F5F5F5', cssVar: '--light-gray',   use: 'Section backgrounds' },
    { name: 'Border Gray',  hex: '#E0E0E0', cssVar: '--border-gray',  use: 'Default borders' },
    { name: 'White',        hex: '#FFFFFF', cssVar: '--white',        use: 'Card backgrounds, button text' },
  ],
};

function swatchGrid(items) {
  return items.map(s => `
    <div style="border:1px solid var(--border-gray); border-radius:8px; overflow:hidden;">
      <div style="background:${s.hex}; height:120px;"></div>
      <div style="padding:14px 16px;">
        <div style="font-weight:700; font-size:13px; color:var(--dark);">${s.name}</div>
        <div style="font-family:monospace; font-size:11px; color:var(--medium-gray); margin-top:2px;">${s.hex}</div>
        <div style="font-family:monospace; font-size:11px; color:var(--medium-gray); margin-top:2px;">${s.cssVar}</div>
        <div style="font-size:12px; color:var(--medium-gray); margin-top:8px; line-height:1.5;">${s.use}</div>
      </div>
    </div>
  `).join('');
}

function sectionHeader(label, title) {
  return `
    <div style="margin-bottom:24px;">
      <div style="font-family:'Inter',sans-serif; font-size:12px; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:var(--brand-red); margin-bottom:8px;">— ${label}</div>
      <div style="font-family:'Playfair Display',serif; font-size:32px; font-weight:800; color:var(--dark); letter-spacing:-0.5px;">${title}</div>
    </div>
  `;
}

export const Brand = {
  render: () => `
    <div style="padding:48px;">
      ${sectionHeader('BRAND COLORS', 'Brand palette')}
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px;">
        ${swatchGrid(SWATCHES.brand)}
      </div>
    </div>
  `,
};

export const Neutrals = {
  render: () => `
    <div style="padding:48px;">
      ${sectionHeader('NEUTRALS', 'Grayscale')}
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px;">
        ${swatchGrid(SWATCHES.neutral)}
      </div>
    </div>
  `,
};

export const All = {
  name: 'All swatches',
  render: () => `
    <div style="padding:48px;">
      ${sectionHeader('BRAND', 'Brand colors')}
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px; margin-bottom:48px;">
        ${swatchGrid(SWATCHES.brand)}
      </div>
      ${sectionHeader('NEUTRALS', 'Neutrals')}
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px;">
        ${swatchGrid(SWATCHES.neutral)}
      </div>
    </div>
  `,
};
