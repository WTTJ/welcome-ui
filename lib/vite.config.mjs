import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'
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
      external: [
        'react',
        '@xstyled/styled-components',
        '@juggle/resize-observer',
        'copy-to-clipboard',
        'date-fns',
        'downshift',
        'lottie-light-react',
        'match-sorter',
        'react-datepicker',
        'react-dropzone',
        'react-flatten-children',
        'react-hot-toast',
        'styled-components',
      ],
      output: {
        globals: {
          react: 'React',
          '@xstyled/styled-components': 'XStyled',
          '@juggle/resize-observer': 'ResizeObserver',
          'copy-to-clipboard': 'copyToClipboard',
          'date-fns': 'DateFns',
          downshift: 'Downshift',
          'lottie-light-react': 'Lottie',
          'match-sorter': 'matchSorter',
          'react-datepicker': 'ReactDatepicker',
          'react-dropzone': 'ReactDropzone',
          'react-flatten-children': 'FlattenChildren',
          'react-hot-toast': 'RHT',
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
          src: 'src/components/IconFont/fonts',
          dest: '.',
        },
      ],
    }),
  ],
})
