import { resolve } from 'path'
import fs from 'fs'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import preserveDirectives from 'rollup-preserve-directives'

// Function to get all component directories
const getComponentEntries = () => {
  const componentsDir = resolve(__dirname, 'src/components')

  // Read all directories in the components folder
  const componentDirs = fs
    .readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  // Create entry object dynamically
  const entries = componentDirs.reduce(
    (acc, componentName) => {
      const entryPath = resolve(componentsDir, componentName, 'index.tsx')

      // Only add to entries if the index.tsx file exists
      if (fs.existsSync(entryPath)) {
        acc[componentName] = entryPath
      }

      return acc
    },
    {
      // Always include the main index entry
      index: resolve(__dirname, 'src/index.tsx'),
    }
  )

  return entries
}

function addUseClientDirective() {
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
      entry: getComponentEntries(),
      fileName: '[name]',
      name: 'Welcome UI',
    },
    rollupOptions: {
      external: ['react', '@xstyled/styled-components'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [
    preserveDirectives(),
    addUseClientDirective(),
    dts({ outDir: 'dist/types', entryRoot: 'src', exclude: ['**/*.test*ts*'] }),
  ],
})
