export default {
  title: 'Components/Card',
  argTypes: {
    eyebrow: { control: 'text' },
    title: { control: 'text' },
    body: { control: 'text' },
    hover: { control: 'boolean' },
  },
  parameters: {
    docs: { description: { component: 'Card. Webflow classes: `.card` + `.card-image` + `.card-body`. 16px radius. Hover: lift + shadow-lg.' } },
  },
};

function renderCard({
  eyebrow = '— OUR WORK',
  title = 'Southern HIV Impact Fund',
  body = 'Resourcing community-led HIV programs across the Southern United States.',
  hover = false,
}) {
  const transform = hover ? 'translateY(-6px)' : 'translateY(0)';
  const shadow = hover ? 'var(--shadow-lg)' : 'none';
  return `
    <div style="padding:32px; max-width:380px;">
      <div class="card" style="
        background:white;
        border:1px solid var(--border-gray);
        border-radius:16px;
        overflow:hidden;
        transition: all 300ms ease;
        transform:${transform};
        box-shadow:${shadow};
      ">
        <div class="card-image" style="background:var(--light-gray); height:220px;"></div>
        <div class="card-body" style="padding:32px;">
          <div style="font-family:'Inter',sans-serif; font-size:12px; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:var(--brand-red); margin-bottom:12px;">${eyebrow}</div>
          <div style="font-family:'Playfair Display',serif; font-size:28px; font-weight:800; letter-spacing:-0.5px; line-height:1.25; color:var(--dark); margin-bottom:12px;">${title}</div>
          <div style="font-family:'Inter',sans-serif; font-size:14px; line-height:1.5; color:var(--medium-gray);">${body}</div>
        </div>
      </div>
    </div>
  `;
}

export const Default = { args: { hover: false }, render: renderCard };
export const Hover = { name: 'Hover (lifted)', args: { hover: true }, render: renderCard };

export const Grid = {
  name: '3-card grid',
  render: () => `
    <div style="padding:48px; display:grid; grid-template-columns:repeat(3, 1fr); gap:24px;">
      ${renderCard({ eyebrow: '— PROGRAM', title: 'Grantmaking',       body: 'Funding community-led HIV programs since 1998 — $100M+ deployed.' })}
      ${renderCard({ eyebrow: '— PROGRAM', title: 'Policy & Advocacy', body: 'AIDSWatch and the Policy Action Center — the voice of the field.' })}
      ${renderCard({ eyebrow: '— PROGRAM', title: 'Capacity Building', body: 'Training, technical assistance, and sector transformation.' })}
    </div>
  `,
};
