export default {
  title: 'Patterns/Hero',
  argTypes: {
    eyebrow: { control: 'text' },
    title: { control: 'text' },
    body: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Editorial split-panel hero. Dark text panel left, photo right. Used on homepage and program landing pages.' } },
  },
};

function render({
  eyebrow = '— AIDS UNITED · 2026',
  title = 'Care, dignity, and action for communities most impacted.',
  body = 'We fund, support, and advocate for community-led HIV programs across the United States — with a focus on the South and the communities most impacted by the epidemic.',
}) {
  return `
    <section style="display:grid; grid-template-columns:1fr 1fr; min-height:560px; font-family:'Inter',sans-serif;">
      <div style="background:var(--dark); color:white; padding:80px 64px; display:flex; flex-direction:column; justify-content:center; gap:24px;">
        <div style="font-size:12px; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:var(--brand-red);">${eyebrow}</div>
        <h1 style="font-family:'Playfair Display',serif; font-weight:800; font-size:62px; line-height:1.05; letter-spacing:-2.5px; margin:0; color:white;">${title}</h1>
        <p style="font-size:18px; line-height:1.7; color:white; opacity:0.85; max-width:480px;">${body}</p>
        <div style="display:flex; gap:16px; padding-top:8px;">
          <button style="background:var(--brand-red); color:white; border:0; border-radius:8px; padding:18px 40px; font-size:14px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; cursor:pointer;">Donate now</button>
          <button style="background:transparent; color:white; border:2px solid rgba(255,255,255,0.3); border-radius:8px; padding:18px 40px; font-size:14px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; cursor:pointer;">Our work</button>
        </div>
      </div>
      <div style="background: linear-gradient(135deg, #735548 0%, #4a3a32 100%); display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,0.5); font-size:12px;">
        [Editorial photo — community / advocacy moment]
      </div>
    </section>
  `;
}

export const Default = { render };
