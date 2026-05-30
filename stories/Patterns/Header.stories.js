export default {
  title: 'Patterns/Header',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Fixed white nav, 80px tall, with logo + nav items + Donate CTA. Build as a Webflow Symbol.' } },
  },
};

export const Default = {
  render: () => `
    <div style="background:var(--light-gray); padding:0;">
      <header style="
        display:flex; align-items:center; justify-content:space-between;
        padding:0 48px; height:80px;
        background:var(--white);
        border-bottom:1px solid var(--border-gray);
        font-family:'Inter',sans-serif;
      ">
        <div style="font-family:'Playfair Display',serif; font-weight:800; font-size:22px; letter-spacing:-0.5px; color:var(--brand-red);">AIDS United</div>
        <nav style="display:flex; gap:32px; align-items:center;">
          ${['About', 'Our Work', 'Get Involved', 'Resources'].map(item => `
            <span style="display:flex; align-items:center; gap:6px; font-size:14px; font-weight:700; color:var(--dark-gray);">
              ${item} <span style="font-size:10px; color:var(--medium-gray);">▾</span>
            </span>
          `).join('')}
        </nav>
        <button style="
          padding:14px 28px; background:var(--brand-red); color:white;
          border:0; border-radius:8px;
          font-family:'Inter',sans-serif; font-size:14px; font-weight:700;
          letter-spacing:1.5px; text-transform:uppercase; cursor:pointer;
        ">Donate</button>
      </header>
      <div style="height:200px; padding:48px; color:var(--medium-gray); font-size:13px;">
        ↑ Fixed header sits at the top of every page.
      </div>
    </div>
  `,
};
