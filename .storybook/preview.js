import './preview.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    layout: 'padded',
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light',   value: '#ffffff' },
        { name: 'gray',    value: '#f5f5f5' },
        { name: 'dark',    value: '#1a1a1a' },
        { name: 'red',     value: '#C42032' },
        { name: 'blue',    value: '#3C73A1' },
      ],
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Foundations',
          ['Colors', 'Typography', 'Spacing', 'Radii', 'Shadows'],
          'Components',
          ['Button', 'Input', 'Card'],
          'Patterns',
          ['Header / Nav', 'Footer', 'Hero', 'Impact Stats', 'Donate CTA', 'Newsletter'],
          'Accessibility',
        ],
      },
    },
  },
};

export default preview;
