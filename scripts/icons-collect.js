/* eslint-disable no-console */

const path = require('path')
const fs = require('fs')
const util = require('util')

const { toPascalCase } = require('../utils/strings')

const { FLAG_ICONS, readIconsFromAssets } = require('./utils')

require('colors')

fs.readdirAsync = util.promisify(fs.readdir)

const ROOT_PATH = path.join(__dirname, '..')
const ICON_PATH = path.join(ROOT_PATH, 'packages/Icon')
const ICONS_PATH = path.join(ROOT_PATH, 'icons')

// State to hold all icons so we don't have to keep reading all the files
let icons = {}

// Write content.json for a given icon
const writeIconContentsJson = (outputFolder, content, key) => {
  let svgContent = /<svg[^>]*>([\s\S]*)<\/svg>/g.exec(content)
  let viewBoxMatch = content.match(/viewBox="(.*?)"/)
  let viewBox = viewBoxMatch ? viewBoxMatch[1] : undefined

  if (svgContent) {
    svgContent = svgContent[1].replace(/fill="#134B45"/g, 'fill="currentColor"').trim()
  }

  const isFlag = FLAG_ICONS.includes(key)
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

// Write .npmignore for a given icon
const writeIconNpmIgnore = outputFolder => {
  const fileContent = `/*
!/dist/*.js
!/dist/*.d.ts
`

  fs.writeFileSync(`${outputFolder}/.npmignore`, fileContent)
}

// Write index.d.ts for a given icon
const writeIndexDTS = (outputFolder, iconName) => {
  const fileContent = `import React from 'react'
import { IconProps } from '@welcome-ui/icon'
export declare const ${iconName}Icon: React.FC<IconProps>
`

  fs.writeFileSync(`${outputFolder}/index.d.ts`, fileContent)
}

// Write package.json for a given icon
const writeIconPackageJson = (outputFolder, key) => {
  const file = `${outputFolder}/package.json`

  // Get root icon config
  const { version } = require(`${ICON_PATH}/package.json`)

  let config = {}
  if (fs.existsSync(file)) {
    config = require(file)
    // config = JSON.parse(config.toString())
  }
  // Save icons in global 'state'
  icons[key] = {
    name: toPascalCase(key),
    version: config.version || '1.0.0',
  }

  const content = {
    ...config,
    name: `@welcome-ui/icons.${key}`,
    sideEffects: false,
    main: `dist/icons.${key}.cjs.js`,
    module: `dist/icons.${key}.es.js`,
    types: 'dist/index.d.ts',
    version: config.version || '1.0.0',
    publishConfig: {
      access: 'public',
    },
    dependencies: {
      '@welcome-ui/icon': `^${version}`,
    },
    peerDependencies: {
      react: '^16.10.2 || ^17.0.1',
      'react-dom': '^16.10.2 || ^17.0.1',
    },
    license: 'MIT',
  }

  const fileContent = `${JSON.stringify(content, 0, 2)}
`

  fs.writeFileSync(file, fileContent)
}

// Write index.js for a given icon
const writeIconIndexJs = (outputFolder, iconName) => {
  const file = `${outputFolder}/index.js`
  const fileContent = `import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function ${iconName}Icon(props) {
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
    const outputFolder = `${ICONS_PATH}/${iconName}`
    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder)
    }
    // package.json
    writeIconPackageJson(outputFolder, key)
    // .npmignore
    writeIconNpmIgnore(outputFolder)
    // contents.json
    writeIconContentsJson(outputFolder, content, key)
    // index.js
    writeIconIndexJs(outputFolder, iconName)
    // index.d.ts
    writeIndexDTS(outputFolder, iconName)
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
    return `export { ${iconName}Icon } from '@welcome-ui/icons.${key}'`
  }).join(`
`)
  fs.writeFileSync(
    `${ICONS_PATH}/index.js`,
    `${rootIndexContent}
`
  )

  // Write main icons/package.json
  let config = require(`${ICONS_PATH}/package.json`)

  // Get versions of each icon
  const dependencies = files.reduce((acc, { key }) => {
    acc[`@welcome-ui/icons.${key}`] = `^${icons[key].version}`
    return acc
  }, {})

  // Add dependencies (all individual icons) to icons/package.json
  const rootPackageJsonContent = {
    ...config,
    dependencies,
  }
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
