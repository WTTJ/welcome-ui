/* eslint-disable no-console, @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs')
const util = require('util')

const { toPascalCase } = require('../utils/strings')

const { FLAG_ICONS, readIconsFromAssets } = require('./utils')

require('colors')

fs.readdirAsync = util.promisify(fs.readdir)

const ROOT_PATH = path.join(__dirname, '..')
const ICONS_PATH = path.join(ROOT_PATH, 'icons')

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
    width: 15,
    height: 15,
    viewBox,
    block: svgContent,
  }

  if (isFlag) {
    fileContent.isFlag = true
  }

  fs.writeFileSync(`${outputFolder}/content.json`, JSON.stringify(fileContent, 0, 2))
}

// Write index.tsx for a given icon
const writeIconIndex = (outputFolder, iconName) => {
  const file = `${outputFolder}/index.tsx`
  const fileContent = `import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ${iconName}Icon: React.FC<IconProps> = props => {
  return <Icon alt="${iconName}" content={content} {...props} />
}

export const ${iconName}IconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
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
    const outputFolder = `${ICONS_PATH}/src/${iconName}`
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
  const rootIndexContent = files.map(({ key }) => {
    const iconName = toPascalCase(key)
    return `export * from './${iconName}'`
  })

  fs.writeFileSync(
    `${ICONS_PATH}/src/index.ts`,
    `${rootIndexContent.join('\n')}
`
  )

  // Write main icons/index.d.ts
  let rootIndexDTSContent = `import React from 'react'
import { IconPandaProps, IconProps } from '@welcome-ui/icon'
`
  rootIndexDTSContent += files.map(({ key }) => {
    const iconName = toPascalCase(key)
    return `export declare const ${iconName}Icon: React.FC<IconProps>
export declare const ${iconName}IconPanda: React.FC<IconPandaProps>`
  }).join(`
`)
  fs.writeFileSync(
    `${ICONS_PATH}/src/index.d.ts`,
    `${rootIndexDTSContent}
`
  )

  // Write main icons/package.json
  let config = require(`${ICONS_PATH}/package.json`)

  // Add dependencies (all individual icons) to icons/package.json
  const rootPackageJsonContent = config
  const fileContent = `${JSON.stringify(rootPackageJsonContent, 0, 2)}
`

  fs.writeFileSync(`${ICONS_PATH}/package.json`, fileContent)

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
