export default {
  title: 'Patterns/Newsletter',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Newsletter / Take Action form. Wires to EveryAction. Used in footer + Take Action section.' } },
  },
};

export const FullForm = {
  name: 'Full form (Take Action section)',
  render: () => `
    <section style="background:var(--brand-red); padding:80px 48px; color:white; font-family:'Inter',sans-serif;">
      <div style="max-width:760px; margin:0 auto;">
        <div style="font-size:12px; font-weight:700; letter-spacing:4px; text-transform:uppercase; margin-bottom:12px;">— TAKE ACTION</div>
        <h2 style="font-family:'Playfair Display',serif; font-weight:800; font-size:40px; letter-spacing:-1px; line-height:1.15; margin:0 0 16px;">Join the movement</h2>
        <p style="font-size:16px; opacity:0.9; margin:0 0 24px; line-height:1.7;">Get policy alerts, AIDSWatch updates, and program announcements straight to your inbox.</p>

        <div style="display:flex; gap:12px; margin-bottom:16px;">
          ${['First name', 'Last name'].map(p => `
            <div style="flex:1; background:white; border-radius:8px; padding:16px 20px; color:var(--medium-gray); font-size:15px;">${p}</div>
          `).join('')}
        </div>
        <div style="background:white; border-radius:8px; padding:16px 20px; color:var(--medium-gray); font-size:15px; margin-bottom:16px;">Email address</div>

        <div style="display:flex; gap:24px; margin-bottom:24px;">
          ${['Events & AIDSWatch', 'Policy & Advocacy', 'Programs & Grants'].map(lbl => `
            <label style="display:flex; align-items:center; gap:10px; cursor:pointer; font-size:14px;">
              <span style="width:18px; height:18px; border:2px solid white; border-radius:4px; display:inline-block;"></span>${lbl}
            </label>
          `).join('')}
        </div>

        <button style="
          padding:18px 40px; background:var(--dark); color:white; border:0; border-radius:8px;
          font-family:'Inter',sans-serif; font-size:14px; font-weight:700;
          letter-spacing:1.5px; text-transform:uppercase; cursor:pointer;
        ">Get involved</button>
      </div>
    </section>
  `,
};

export const Inline = {
  name: 'Inline (footer / Take Action condensed)',
  render: () => `
    <section style="background:var(--brand-red); padding:80px 48px; color:white; text-align:center; font-family:'Inter',sans-serif;">
      <div style="max-width:640px; margin:0 auto;">
        <div style="font-size:12px; font-weight:700; letter-spacing:4px; text-transform:uppercase; margin-bottom:12px;">— TAKE ACTION</div>
        <h2 style="font-family:'Playfair Display',serif; font-weight:800; font-size:40px; letter-spacing:-1px; line-height:1.15; margin:0 0 16px;">Join the movement.</h2>
        <p style="font-size:16px; opacity:0.9; margin:0 0 32px; line-height:1.7;">Policy alerts, AIDSWatch updates, and program announcements straight to your inbox.</p>
        <div style="display:flex; gap:12px; max-width:480px; margin:0 auto;">
          <div style="flex:1; background:white; border-radius:8px; padding:16px 20px; color:var(--medium-gray); font-size:15px; text-align:left;">Email address</div>
          <button style="padding:16px 40px; background:var(--dark); color:white; border:0; border-radius:8px; font-size:14px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; cursor:pointer;">Get involved</button>
        </div>
      </div>
    </section>
  `,
};
