import path from 'path'

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
      // Only add for client-side and not css or scss files (adjust the filter as needed)
      if (!path.endsWith('.css') && !path.endsWith('.scss')) {
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
    cssCodeSplit: true,
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
        assetFileNames: '[name].[ext]',
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name].js',
        globals: {
          '@xstyled/styled-components': 'XStyled',
          react: 'React',
          'styled-components': 'Styled',
        },
      },
    },
  },
  plugins: [
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
          src: 'src/old/components/IconsFont/fonts',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@old/fonts': path.resolve(__dirname, './src/old/components/IconsFont/fonts'),
      '@old/theme': path.resolve(__dirname, './src/old/theme'),
      '@old/utils': path.resolve(__dirname, './src/old/utils'),
      // eslint-disable-next-line perfectionist/sort-objects
      '@old': path.resolve(__dirname, './src/old/components'),
      // eslint-disable-next-line perfectionist/sort-objects
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    exclude: ['**/old/**'],
    globals: true,
    retry: 3,
    setupFiles: 'tests/setup.ts',
  },
})
