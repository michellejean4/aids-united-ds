const buttonBase = `
  display:inline-flex; align-items:center; justify-content:center;
  padding:18px 40px;
  border-radius:8px;
  font-family:'Inter', sans-serif; font-size:14px; font-weight:700;
  letter-spacing:1.5px; text-transform:uppercase;
  border:0; cursor:pointer;
  transition: all 300ms ease;
`;

const VARIANTS = {
  primary: `background: var(--brand-red); color: var(--white);`,
  secondary: `background: transparent; color: var(--dark-gray); border: 2px solid var(--border-gray);`,
  blue: `background: var(--brand-blue); color: var(--white);`,
  'ghost-dark': `background: transparent; color: var(--white); border: 2px solid rgba(255,255,255,0.3);`,
};
const HOVER_VARIANTS = {
  primary: `background: var(--red-dark); color: var(--white); transform: translateX(4px);`,
  secondary: `background: transparent; color: var(--dark); border: 2px solid var(--dark);`,
  blue: `background: var(--blue-dark); color: var(--white);`,
  'ghost-dark': `background: rgba(255,255,255,0.05); color: var(--white); border: 2px solid var(--white);`,
};

export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'blue', 'ghost-dark'],
    },
    state: {
      control: { type: 'inline-radio' },
      options: ['default', 'hover'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Button system. Webflow combo classes:
- \`.btn\` (base — 14px Inter Bold, uppercase, 1.5px tracking, 18×40 padding, 8px radius)
- + \`.btn-primary\` / \`.btn-secondary\` / \`.btn-blue\` / \`.btn-ghost-dark\``,
      },
    },
  },
};

function renderBtn({ label = 'Donate now', variant = 'primary', state = 'default' }) {
  const styles = state === 'hover' ? HOVER_VARIANTS[variant] : VARIANTS[variant];
  const onDark = variant === 'ghost-dark';
  return `
    <div style="padding:32px; background:${onDark ? 'var(--dark)' : 'transparent'}; display:inline-block; border-radius:8px;">
      <button class="btn btn-${variant}" style="${buttonBase} ${styles}">${label}</button>
    </div>
  `;
}

export const Primary = {
  args: { label: 'Donate now', variant: 'primary', state: 'default' },
  render: renderBtn,
};
export const PrimaryHover = {
  name: 'Primary (hover)',
  args: { label: 'Donate now', variant: 'primary', state: 'hover' },
  render: renderBtn,
};
export const Secondary = {
  args: { label: 'Learn more', variant: 'secondary', state: 'default' },
  render: renderBtn,
};
export const SecondaryHover = {
  name: 'Secondary (hover)',
  args: { label: 'Learn more', variant: 'secondary', state: 'hover' },
  render: renderBtn,
};
export const Blue = {
  args: { label: 'Give monthly', variant: 'blue', state: 'default' },
  render: renderBtn,
};
export const BlueHover = {
  name: 'Blue (hover)',
  args: { label: 'Give monthly', variant: 'blue', state: 'hover' },
  render: renderBtn,
};
export const GhostDark = {
  name: 'Ghost (on dark)',
  args: { label: 'Get involved', variant: 'ghost-dark', state: 'default' },
  render: renderBtn,
};
export const AllVariants = {
  name: 'All variants',
  render: () => `
    <div style="padding:32px; display:flex; flex-direction:column; gap:24px;">
      <div>
        <div style="font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--medium-gray); margin-bottom:12px;">Default</div>
        <div style="display:flex; gap:24px; align-items:center;">
          ${renderBtn({ label: 'Donate now',   variant: 'primary',    state: 'default' })}
          ${renderBtn({ label: 'Learn more',   variant: 'secondary',  state: 'default' })}
          ${renderBtn({ label: 'Give monthly', variant: 'blue',       state: 'default' })}
          ${renderBtn({ label: 'Get involved', variant: 'ghost-dark', state: 'default' })}
        </div>
      </div>
      <div>
        <div style="font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--medium-gray); margin-bottom:12px;">Hover</div>
        <div style="display:flex; gap:24px; align-items:center;">
          ${renderBtn({ label: 'Donate now',   variant: 'primary',    state: 'hover' })}
          ${renderBtn({ label: 'Learn more',   variant: 'secondary',  state: 'hover' })}
          ${renderBtn({ label: 'Give monthly', variant: 'blue',       state: 'hover' })}
          ${renderBtn({ label: 'Get involved', variant: 'ghost-dark', state: 'hover' })}
        </div>
      </div>
    </div>
  `,
};
