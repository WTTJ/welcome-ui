/// <reference types="vitest/config" />
import path from 'path'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import preserveDirectives from 'rollup-preserve-directives'

import { getLibEntries } from './scripts/get-lib-entries'

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
      '@/fonts': path.resolve(__dirname, './src/components/IconsFont/fonts'),
      '@': path.resolve(__dirname, './src/components'),
    },
  },
  build: {
    lib: {
      entry: getLibEntries(),
      name: 'Welcome UI',
      formats: ['es'],
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
    dts({
      outDir: 'dist/types',
      entryRoot: 'src',
      include: ['src'],
      exclude: ['**/tests/**', '**/docs/**', '*.json'],
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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'tests/setup.ts',
    retry: 3,
  },
})
