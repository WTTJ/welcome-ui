import fs from 'fs'
import { resolve } from 'path'

const getComponentsEntries = () => {
  const componentsDir = resolve(__dirname, '../src/components')
  const tailwindComponentsDir = resolve(__dirname, '../src/TailwindComponents')

  // Read all directories in the components folder
  const componentDirs = fs
    .readdirSync(componentsDir, { withFileTypes: true })
    .filter(directory => directory.isDirectory())
    .map(directory => ({ name: directory.name, path: resolve(componentsDir, directory.name) }))

  // Read all directories in the TailwindComponents folder
  const tailwindComponentDirs = fs
    .readdirSync(tailwindComponentsDir, { withFileTypes: true })
    .filter(directory => directory.isDirectory())
    .map(directory => ({
      name: `Tailwind${directory.name}`,
      path: resolve(tailwindComponentsDir, directory.name),
    }))

  // Combine both component directories
  const allComponentDirs = [...componentDirs, ...tailwindComponentDirs]

  // Create entry object dynamically
  const entries = allComponentDirs.reduce<Record<string, string>>((acc, componentInfo) => {
    const entryPath = `${componentInfo.path}/index.tsx`

    // Only add to entries if the index.tsx file exists
    if (fs.existsSync(entryPath)) {
      acc[componentInfo.name] = entryPath
    }

    return acc
  }, {})

  return entries
}

export const getLibEntries = () => ({
  ...getComponentsEntries(),
  TailwindTheme: resolve(__dirname, '../src/TailwindTheme/index.ts'),
  theme: resolve(__dirname, '../src/theme/index.ts'),
  utils: resolve(__dirname, '../src/utils/index.ts'),
})
