import type { Preview, Decorator } from '@storybook/sveltekit'
import '../src/lib/styles/tokens.css'
import './theme-overrides.css'

const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals.theme as string) ?? 'light-internal'
  document.documentElement.setAttribute('data-theme', theme)
  return Story()
}

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Application context',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light-internal', title: 'Internal (Purple)' },
          { value: 'light-client', title: 'Client (Blue)' },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: 'light-internal',
  },

  decorators: [withTheme],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
