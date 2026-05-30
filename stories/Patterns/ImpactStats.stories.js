export default {
  title: 'Patterns/Impact Stats',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: '3-column impact stats. Big red Playfair numbers on light gray. Counter animation on scroll.' } },
  },
};

const STATS = [
  { num: '$100M+', label: 'Granted',   body: 'In funding to community-led HIV programs since 1998.' },
  { num: '500+',   label: 'Partners',  body: 'Community-based organizations across the United States.' },
  { num: '1M+',    label: 'Reached',   body: 'People served by AIDS United partner programs.' },
];

export const Default = {
  render: () => `
    <section style="background:var(--light-gray); padding:64px 64px; font-family:'Inter',sans-serif;">
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:48px; max-width:1120px; margin:0 auto;">
        ${STATS.map(s => `
          <div>
            <div style="font-family:'Playfair Display',serif; font-weight:800; font-size:80px; line-height:1; letter-spacing:-3px; color:var(--brand-red); margin-bottom:8px;">${s.num}</div>
            <div style="font-size:14px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--dark); margin-bottom:8px;">${s.label}</div>
            <div style="font-size:14px; line-height:1.6; color:var(--medium-gray); max-width:280px;">${s.body}</div>
          </div>
        `).join('')}
      </div>
    </section>
  `,
};
