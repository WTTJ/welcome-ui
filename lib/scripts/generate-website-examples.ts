import { existsSync, readdirSync, writeFileSync } from 'fs'
import { join, resolve } from 'path'

function generateWebsiteExamplesPages() {
  const parentDirectory = resolve(__dirname, '../../')
  const packagesDirectory = join(parentDirectory, 'packages')
  const packagesDirectoryExist = existsSync(packagesDirectory)

  const examples = [] as string[]

  if (!packagesDirectoryExist) return

  const folderList = readdirSync(packagesDirectory)

  for (const folder of folderList) {
    const subFolder = join(parentDirectory, 'lib', 'src', 'components', folder, 'docs', 'examples')
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
}

export const generateWebsiteExamplesPlugin = () => {
  return {
    name: 'website-examples',
    // generate website examples for NextJS static pages
    writeBundle() {
      generateWebsiteExamplesPages()
    },
  }
}
