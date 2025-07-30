/// <reference types="vitest/config" />
import path from 'path'

import tailwindcss from '@tailwindcss/vite'
import preserveDirectives from 'rollup-preserve-directives'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

import { getLibEntries } from './scripts/get-lib-entries'

function addUseClientDirectivePlugin() {
  return {
    name: 'add-use-client',
    transform(code, path) {
      let clientString = ''
      // Only add for client-side and not css files (adjust the filter as needed)
      if (!path.endsWith('.css')) {
        clientString = "'use client';\n"
      }

      return {
        code: `${clientString}${code}`,
        map: null,
      }
    },
  }
}

export default defineConfig({
  build: {
    lib: {
      entry: getLibEntries(),
      formats: ['es'],
      name: 'Welcome UI',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@xstyled/styled-components',
        'styled-components',
      ],
      output: {
        globals: {
          '@xstyled/styled-components': 'XStyled',
          react: 'React',
          'styled-components': 'Styled',
        },
      },
    },
  },
  plugins: [
    tailwindcss(),
    preserveDirectives(),
    addUseClientDirectivePlugin(),
    dts({
      entryRoot: 'src',
      exclude: ['**/tests/**', '**/docs/**', '*.json'],
      include: ['src'],
      outDir: 'dist/types',
    }),
    viteStaticCopy({
      targets: [
        {
          dest: '.',
          src: 'src/components/IconsFont/fonts',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@/fonts': path.resolve(__dirname, './src/components/IconsFont/fonts'),
      '@/theme': path.resolve(__dirname, './src/theme'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      // eslint-disable-next-line perfectionist/sort-objects
      '@': path.resolve(__dirname, './src/components'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    retry: 3,
    setupFiles: 'tests/setup.ts',
  },
})
