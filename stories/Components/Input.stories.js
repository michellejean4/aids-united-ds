export default {
  title: 'Components/Input',
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    state: { control: { type: 'inline-radio' }, options: ['default', 'focus', 'filled', 'error'] },
  },
  parameters: {
    docs: { description: { component: 'Form input. Webflow class: `.input` · 16×20 padding · 8px radius · Brand Red border on focus.' } },
  },
};

function renderInput({ label = 'Email address', placeholder = 'jane@example.com', value = '', state = 'default' }) {
  const borderColor = state === 'focus' ? 'var(--brand-red)' : state === 'error' ? 'var(--brand-red)' : 'var(--border-gray)';
  const borderWidth = state === 'focus' ? '2px' : '1px';
  const displayValue = state === 'filled' ? (value || 'jane@example.com') : (state === 'focus' ? (value || 'jane@example.com|') : '');
  const textColor = (state === 'filled' || state === 'focus') ? 'var(--dark)' : 'var(--medium-gray)';
  const showText = state === 'filled' || state === 'focus' ? displayValue : placeholder;
  return `
    <div style="padding:32px; max-width:480px;">
      <label style="display:block; font-family:'Inter',sans-serif; font-size:14px; font-weight:700; color:var(--dark); margin-bottom:8px;">${label}</label>
      <div class="input" style="
        display:flex; align-items:center;
        padding:16px 20px;
        border:${borderWidth} solid ${borderColor};
        border-radius:8px;
        background:white;
        font-family:'Inter',sans-serif; font-size:15px;
        color:${textColor};
        transition: border 200ms;
      ">
        ${showText}
      </div>
      ${state === 'error' ? '<div style="font-size:13px; color:var(--brand-red); margin-top:6px;">Please enter a valid email address.</div>' : ''}
    </div>
  `;
}

export const Default = { args: { label: 'Email address', placeholder: 'Email address', state: 'default' }, render: renderInput };
export const Focus   = { args: { label: 'Email address', placeholder: 'Email address', state: 'focus'   }, render: renderInput };
export const Filled  = { args: { label: 'Email address', placeholder: 'Email address', value: 'jane@example.com', state: 'filled' }, render: renderInput };
export const Error   = { args: { label: 'Email address', placeholder: 'Email address', state: 'error'   }, render: renderInput };

export const AllStates = {
  name: 'All states',
  render: () => `
    <div style="padding:32px; display:flex; flex-direction:column; gap:8px; max-width:480px;">
      ${['default','focus','filled','error'].map(state => renderInput({ state, label: state[0].toUpperCase()+state.slice(1) })).join('')}
    </div>
  `,
};
