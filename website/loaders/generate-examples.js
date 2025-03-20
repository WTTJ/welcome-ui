/* eslint-disable @typescript-eslint/no-require-imports */
const { existsSync, readdirSync, writeFileSync } = require('fs')
const { join, resolve } = require('path')

function generateWebsiteExamplesPages() {
  // eslint-disable-next-line no-console
  console.log('Examples generating...')

  const parentDirectory = resolve(__dirname, '../../')
  const packagesDirectory = join(parentDirectory, 'lib/src/components')
  const packagesDirectoryExist = existsSync(packagesDirectory)

  const examples = []

  if (!packagesDirectoryExist) return

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

  const fileContent = `/* eslint-disable */\n/** WARNING\nThis file is auto-generate with yarn watch command, do not change it directly!\n**/\n\nimport dynamic from "next/dynamic";\n\nexport default {\n${examples
    .map(
      path =>
        `  "${path}": dynamic(() => import("../../lib/src/components${path}").then(mod => mod), { ssr: false })`
    )
    .join(',\n')}\n};\n`

  writeFileSync(join(parentDirectory, 'website', 'build-app', 'examples.js'), fileContent)

  // eslint-disable-next-line no-console
  console.log('Examples updates ✅')
}

module.exports = { generateWebsiteExamplesPages }
