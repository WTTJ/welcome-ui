import fs from 'fs'
import { resolve } from 'path'

const getComponentsEntries = () => {
  const componentsDir = resolve(__dirname, '../src/components')

  // Read all directories in the components folder
  const componentDirs = fs
    .readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  // Create entry object dynamically
  const entries = componentDirs.reduce<Record<string, string>>((acc, componentName) => {
    const entryPathTsx = resolve(componentsDir, componentName, 'index.tsx')
    const entryPathTs = resolve(componentsDir, componentName, 'index.ts')
    const entryPath = fs.existsSync(entryPathTsx) ? entryPathTsx : entryPathTs

    // Only add to entries if the index.tsx file exists
    if (fs.existsSync(entryPath)) {
      acc[componentName] = entryPath
    }

    return acc
  }, {})

  return entries
}

export const getLibEntries = () => ({
  ...getComponentsEntries(),
  theme: resolve(__dirname, '../src/theme/index.ts'),
  utils: resolve(__dirname, '../src/utils/index.ts'),
})
