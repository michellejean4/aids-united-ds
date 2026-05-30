export default {
  title: 'Patterns/Footer',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Dark 5-col footer + red transparency bar. Build as a Webflow Symbol.' } },
  },
};

const COLS = {
  About:        ['Mission & Story', 'Team & Leadership', 'Racial Justice', 'Financials', 'Careers', 'Contact'],
  'Our Work':   ['Grantmaking', 'Policy & Advocacy', 'Capacity Building', 'AIDSWatch', 'Somos Unidos'],
  Resources:    ['HIV 101', 'Toolkits', 'AU University', 'News & Press', 'Community Stories'],
  'Get Involved': ['Donate', 'AIDSWatch @ Home', 'Policy Action Center', 'Newsletter', 'Shop Apparel'],
};

export const Default = {
  render: () => `
    <footer style="background:var(--dark); color:var(--white); font-family:'Inter',sans-serif;">
      <div style="display:grid; grid-template-columns:280px repeat(4, 1fr); gap:48px; padding:80px 48px 64px;">
        <div>
          <div style="font-family:'Playfair Display',serif; font-weight:800; font-size:28px; letter-spacing:-0.5px;">AIDS United</div>
          <div style="font-size:14px; opacity:0.6; margin-top:16px;">Care. Dignity. Action.</div>
        </div>
        ${Object.entries(COLS).map(([title, links]) => `
          <div>
            <div style="font-size:12px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:16px;">${title}</div>
            <div style="display:flex; flex-direction:column; gap:10px;">
              ${links.map(l => `<a href="#" style="color:white; opacity:0.75; text-decoration:none; font-size:14px;">${l}</a>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <div style="background:var(--brand-red); padding:24px 48px; display:flex; justify-content:space-between; align-items:center;">
        <div style="font-size:12px;">© 2026 AIDS United · 501(c)(3) · 4-star Charity Navigator · 87¢ of every dollar to programs</div>
        <div style="display:flex; gap:16px;">
          ${['IG', 'X', 'LI', 'FB'].map(_ => `
            <span style="width:28px; height:28px; border:1px solid white; border-radius:999px;"></span>
          `).join('')}
        </div>
      </div>
    </footer>
  `,
};
