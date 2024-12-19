import { resolve } from 'path'
import fs from 'fs'

export const getComponentsEntries = () => {
  const parentDirectory = resolve(__dirname, '../')
  const componentsDir = resolve(parentDirectory, 'src/components')

  // Read all directories in the components folder
  const componentDirs = fs
    .readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  // Create entry object dynamically
  const entries = componentDirs.reduce(
    (acc, componentName) => {
      const entryPath = resolve(componentsDir, componentName, 'index.tsx')
      const kababCaseName = componentName
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase()

      // Only add to entries if the index.tsx file exists
      if (fs.existsSync(entryPath)) {
        acc[`${kababCaseName}`] = entryPath
      }

      return acc
    },
    {
      // Always include the main index entry
      index: resolve(parentDirectory, 'src/index.tsx'),
    }
  )

  return entries
}
