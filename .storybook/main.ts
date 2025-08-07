import { dirname, join } from 'path'

import type { StorybookConfig } from '@storybook/react-vite'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('storybook-addon-pseudo-states'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  viteFinal: async config => {
    // Import the Tailwind plugin dynamically to avoid evaluation errors
    const tailwindcss = (await import('@tailwindcss/vite')).default
    config.plugins = config.plugins || []
    config.plugins.push(tailwindcss())
    return config
  },
}
export default config
