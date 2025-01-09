import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import preserveDirectives from 'rollup-preserve-directives'

import { generateWebsiteExamplesPlugin } from './scripts/generate-website-examples'
import { getComponentsEntries } from './scripts/get-components-entry'
import { generateTypesDoc } from './scripts/generate-types-doc'

function addUseClientDirectivePlugin() {
  return {
    name: 'add-use-client',
    transform(code) {
      // Only add for client-side files (adjust the filter as needed)
      return {
        code: `'use client';\n${code}`,
        map: null,
      }
    },
  }
}

export default defineConfig({
  build: {
    banner: "'use client';",
    lib: {
      entry: getComponentsEntries(),
      fileName: '[name]',
      name: 'Welcome UI',
    },
    rollupOptions: {
      external: ['react', '@xstyled/styled-components'],
      output: {
        globals: {
          react: 'React',
          '@xstyled/styled-components': 'XStyled',
        },
      },
    },
  },
  plugins: [
    preserveDirectives(),
    addUseClientDirectivePlugin(),
    generateWebsiteExamplesPlugin(),
    generateTypesDoc(),
    dts({
      outDir: 'dist/types',
      entryRoot: 'src',
      exclude: ['**/*.test*ts*', '**/docs/**', '**/*.json'],
    }),
  ],
})
