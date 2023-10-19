import { existsSync, readdirSync, writeFileSync } from 'fs'
import { join } from 'path'

function getExamplesPages() {
  const dir = join(process.cwd(), 'packages')
  const dirExist = existsSync(dir)
  const examples = []

  if (!dirExist) return

  const folderList = readdirSync(dir)

  for (const folder of folderList) {
    const subFolder = join(process.cwd(), 'packages', folder, 'docs', 'examples')
    const subFolderExist = existsSync(subFolder)

    if (!subFolderExist) continue

    const fileList = readdirSync(subFolder)

    for (const file of fileList) {
      examples.push(`${subFolder}/${file}`.split('packages')[1])
    }
  }

  const fileContent = `/* eslint-disable */\n/** WARNING\nThis file is auto-generate with yarn watch command, do not change it directly!\n**/\n\nimport dynamic from "next/dynamic";\n\nexport default {\n${examples
    .map(
      path =>
        `  "${path}": dynamic(() => import("../../packages${path}").then(mod => mod), { ssr: false })`
    )
    .join(',\n')}\n};\n`

  writeFileSync(join(process.cwd(), 'website', 'build-app', 'examples.js'), fileContent)
}

getExamplesPages()
