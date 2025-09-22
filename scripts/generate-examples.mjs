import { existsSync, readdirSync, writeFileSync } from 'fs'
import { join } from 'path'

const isWebsite = process.cwd().endsWith('website')
const parentPath = isWebsite ? join(process.cwd(), '..') : process.cwd()

/**
 * Generates a dynamic import file for website examples.
 * This function scans component directories for example files and creates
 * a JavaScript file that dynamically imports all found examples.
 *
 * @param {Object} options - Configuration options
 * @param {boolean} options.isWebsite - Whether running from website directory or root
 */
export function generateWebsiteExamplesPages() {
  // eslint-disable-next-line no-console
  console.log('Examples generating...')

  const packagesDirectory = join(parentPath, 'lib/src/components')
  const packagesDirectoryExists = existsSync(packagesDirectory)

  const examples = []

  if (!packagesDirectoryExists) return null

  const folderList = readdirSync(packagesDirectory)

  for (const folder of folderList) {
    const subFolder = join(packagesDirectory, folder, 'docs', 'examples')
    const subFolderExist = existsSync(subFolder)

    if (!subFolderExist) continue

    const fileList = readdirSync(subFolder)

    for (const file of fileList) {
      examples.push(`${subFolder}/${file}`.split('components')[1])
    }
  }

  const fileContent = `/** WARNING\nThis file is auto-generate with yarn watch command, do not change it directly!\n**/\n\nimport dynamic from "next/dynamic";\n\nexport default {\n${examples
    .map(
      path =>
        `  "${path}": dynamic(() => import("../../lib/src/components${path}").then(mod => mod), { ssr: false })`
    )
    .join(',\n')}\n};\n`

  writeFileSync(join(parentPath, 'website', 'build-app', 'examples.js'), fileContent)
}
