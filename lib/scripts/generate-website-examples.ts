import { existsSync, readdirSync, writeFileSync } from 'fs'
import { join, resolve } from 'path'

import { MIGRATED_PACKAGES } from '../../migrated_packages'

function generateWebsiteExamplesPages() {
  const parentDirectory = resolve(__dirname, '../../')
  const packagesDirectory = join(parentDirectory, 'packages')
  const packagesDirectoryExist = existsSync(packagesDirectory)

  const examples = [] as string[]

  if (!packagesDirectoryExist) return

  const folderList = readdirSync(packagesDirectory)

  for (const folder of folderList) {
    const isNewPackage = MIGRATED_PACKAGES.includes(folder)

    const subFolder = isNewPackage
      ? join(parentDirectory, 'lib', 'src', 'components', folder, 'docs', 'examples')
      : join(packagesDirectory, folder, 'docs', 'examples')
    const subFolderExist = existsSync(subFolder)

    if (!subFolderExist) continue

    const fileList = readdirSync(subFolder)

    for (const file of fileList) {
      examples.push(
        isNewPackage
          ? `${subFolder}/${file}`.split('components')[1]
          : `${subFolder}/${file}`.split('packages')[1]
      )
    }
  }

  const fileContent = `/* eslint-disable */\n/** WARNING\nThis file is auto-generate with yarn watch command, do not change it directly!\n**/\n\nimport dynamic from "next/dynamic";\n\nexport default {\n${examples
    .map(
      path =>
        `  "${path}": dynamic(() => ${MIGRATED_PACKAGES.some(pkg => path.startsWith(`/${pkg}`)) ? 'import("../../lib/src/components' : 'import("../../packages'}${path}").then(mod => mod), { ssr: false })`
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
