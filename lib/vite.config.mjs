import path from 'path'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import preserveDirectives from 'rollup-preserve-directives'

import { generateWebsiteExamplesPlugin } from './scripts/generate-website-examples'
import { getLibEntries } from './scripts/get-lib-entries'
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
  resolve: {
    alias: {
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/theme': path.resolve(__dirname, './src/theme'),
      '@': path.resolve(__dirname, './src/components'),
    },
  },
  build: {
    lib: {
      entry: getLibEntries(),
      name: 'Welcome UI',
    },
    rollupOptions: {
      external: ['react', '@xstyled/styled-components', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          '@xstyled/styled-components': 'XStyled',
          'styled-components': 'Styled',
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
    viteStaticCopy({
      targets: [
        {
          src: 'src/components/IconsFont/fonts',
          dest: '.',
        },
      ],
    }),
  ],
})
