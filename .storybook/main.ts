import { dirname, join, parse } from 'path'

import type { StorybookConfig } from '@storybook/react-vite'
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'
import genericNames from 'generic-names'
import { mergeConfig } from 'vite'

const generateHash = genericNames('[hash:base64:5]')

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
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
  stories: ['../lib/src/TailwindComponents/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  viteFinal: async config => {
    const { default: tailwindCSSVite } = await import('@tailwindcss/vite')
    return mergeConfig(config, {
      css: {
        modules: {
          /**
           * Generate a scoped name for the CSS module class.
           * We have to create our own logic because we want to get rid of the module part from the generated class name.
           */
          generateScopedName: (className: string, filename: string) => {
            const module = parse(filename).name.replace('.module', '')

            const hash = generateHash(className, filename)

            const join = className.startsWith('-') ? '' : '-'
            return `${module}${join}${className}_${hash}`
          },
        },
        postcss: {
          plugins: [tailwindcss(), autoprefixer()],
        },
      },
      plugins: [tailwindCSSVite()],
    })
  },
}
export default config
