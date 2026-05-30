export default {
  title: 'Patterns/Donate CTA',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Donate card with one-time/monthly toggle and preset amounts. Used as a floating card on the homepage donate section.' } },
  },
};

export const Card = {
  render: () => `
    <div style="background:#2c2018; padding:80px 48px; font-family:'Inter',sans-serif;">
      <div style="max-width:420px; margin:0 auto; background:white; border-radius:16px; padding:40px; box-shadow:var(--shadow-lg);">
        <div style="font-size:12px; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:var(--brand-red); margin-bottom:12px;">— SUPPORT OUR WORK</div>
        <div style="font-family:'Playfair Display',serif; font-weight:800; font-size:28px; line-height:1.25; letter-spacing:-0.5px; color:var(--dark); margin-bottom:24px;">Make a difference today.</div>

        <div style="display:flex; background:var(--light-gray); border-radius:8px; margin-bottom:24px; padding:0;">
          <div style="flex:1; text-align:center; padding:12px; background:var(--dark); color:white; border-radius:8px; font-size:13px; font-weight:700; letter-spacing:1px; text-transform:uppercase;">One-time</div>
          <div style="flex:1; text-align:center; padding:12px; color:var(--medium-gray); font-size:13px; font-weight:700; letter-spacing:1px; text-transform:uppercase;">Monthly</div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px; margin-bottom:24px;">
          ${[
            { val:'$25',   active:false },
            { val:'$50',   active:true },
            { val:'$100',  active:false },
            { val:'Other', active:false },
          ].map(a => `
            <div style="
              padding:16px 0; text-align:center; border-radius:8px;
              ${a.active ? 'background:var(--brand-red); color:white;' : 'border:1px solid var(--border-gray); color:var(--dark);'}
              font-weight:700; font-size:16px; cursor:pointer;
            ">${a.val}</div>
          `).join('')}
        </div>

        <button style="
          width:100%; padding:18px; background:var(--brand-red); color:white; border:0; border-radius:8px;
          font-family:'Inter',sans-serif; font-size:14px; font-weight:700;
          letter-spacing:1.5px; text-transform:uppercase; cursor:pointer;
        ">Donate $50 now</button>
      </div>
    </div>
  `,
};
