/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { promisify } from 'util'

export const toPascalCase = str => {
  const camelCase = str.replace(/_(\w)/g, ($, $1) => $1.toUpperCase())
  return `${camelCase.charAt(0).toUpperCase()}${camelCase.substr(1)}`
}

import { FLAG_ICONS, readIconsFromAssets } from './utils.mjs'

import 'colors'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

fs.readdirAsync = promisify(fs.readdir)

const ROOT_PATH = path.join(__dirname, '..')
const ICONS_PATH = path.join(ROOT_PATH, 'lib/src/components/Icon')

// Write content.json for a given icon
const writeIconContentsJson = (outputFolder, content, key) => {
  let svgContent = /<svg[^>]*>([\s\S]*)<\/svg>/g.exec(content)
  let viewBoxMatch = content.match(/viewBox="(.*?)"/)
  let viewBox = viewBoxMatch ? viewBoxMatch[1] : undefined

  const isFlag = FLAG_ICONS.includes(key)

  if (svgContent && !isFlag) {
    svgContent = svgContent[1].replace(/fill="[^"]+"/g, 'fill="currentColor"').trim()
  } else if (svgContent && isFlag) {
    svgContent = svgContent[1].trim()
  }

  let fileContent = {
    block: svgContent,
    height: 15,
    viewBox,
    width: 15,
  }

  if (isFlag) {
    fileContent.isFlag = true
  }

  fs.writeFileSync(`${outputFolder}/content.json`, JSON.stringify(fileContent, 0, 2))
}

// Write index.tsx for a given icon
const writeIconIndex = (outputFolder, iconName) => {
  const file = `${outputFolder}/index.tsx`
  const fileContent = `import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ${iconName}Icon = (props: IconProps) => {
  return <Icon alt="${iconName}" content={content} {...props} />
}
`

  fs.writeFileSync(file, fileContent)
}

// Write icons
const writeIconPackages = files => {
  console.log('Started'.blue, 'Writing individual icon packages'.grey)
  files.forEach(({ content, key }) => {
    // Create folder if necessary
    const iconName = toPascalCase(key)
    const outputFolder = `${ICONS_PATH}/components/${iconName}`
    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder)
    }
    // contents.json
    writeIconContentsJson(outputFolder, content, key)
    // index.tsx
    writeIconIndex(outputFolder, iconName)
  })

  console.log('Success'.green, 'Writing individual icon packages')
  return files
}

// Write root icon files
const writeRootIconPackage = files => {
  console.log('Started'.blue, 'Writing root icon files'.grey)

  // Write main icons/index.ts
  let rootIndexContent = ''

  rootIndexContent += files
    .map(({ key }) => {
      const iconName = toPascalCase(key)
      return `export { ${iconName}Icon } from './components/${iconName}'`
    })
    .join('\n')

  rootIndexContent += `\nexport type { IconProps } from './Icon.types'`

  fs.writeFileSync(`${ICONS_PATH}/index.ts`, `${rootIndexContent}`)

  // Write main icons/types.ts
  let rootIndexDTSContent = `import type { IconProps } from './Icon.types'\n`

  rootIndexDTSContent += files
    .map(({ key }) => {
      const iconName = toPascalCase(key)
      return `export declare const ${iconName}Icon: IconProps`
    })
    .join(`\n`)

  fs.writeFileSync(
    `${ICONS_PATH}/types.ts`,
    `${rootIndexDTSContent}
`
  )

  console.log('Success'.green, 'Writing root icon files')
  return files
}

// Main function: Read icons from folder and update all icon (packages)
readIconsFromAssets()
  .then(writeIconPackages)
  .then(writeRootIconPackage)
  .catch(err => {
    throw err
  })
