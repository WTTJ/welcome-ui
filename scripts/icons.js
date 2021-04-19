/* eslint-disable no-console */

const path = require('path')
const fs = require('fs')
const util = require('util')

const argv = require('yargs').argv
const difference = require('lodash.difference')
const webfontsGenerator = require('webfonts-generator')
require('colors')

const { toPascalCase } = require('../utils/strings')

fs.readFileAsync = util.promisify(fs.readFile)
fs.readdirAsync = util.promisify(fs.readdir)

const FLAG_ICONS = ['flag_cs', 'flag_en', 'flag_es', 'flag_fr', 'flag_sk']

const ROOT_PATH = path.join(__dirname, '..')
const ICON_PATH = path.join(ROOT_PATH, 'packages/Icon')
const ICONS_PATH = path.join(ROOT_PATH, 'icons')
const INPUT_PATH = path.join(ICONS_PATH, '_assets')
const ICON_FONT_PATH = path.join(ROOT_PATH, 'packages/IconFont')

// State to hold all icons so we don't have to keep reading all the files
let icons = {}

// Read icons/assets/*.svg
const readIconsFromAssets = () => {
  return fs
    .readdirAsync(INPUT_PATH)
    .then(files =>
      files.filter(file => {
        const [, type] = file.split('.')
        return type === 'svg'
      })
    )
    .then(files =>
      Promise.all(
        files.map(file => {
          const [key] = file.split('.')
          return fs
            .readFileAsync(path.join(INPUT_PATH, file), 'utf8')
            .then(content => ({ key, content }))
        })
      )
    )
}

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
    block: svgContent
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
`

  fs.writeFileSync(`${outputFolder}/.npmignore`, fileContent)
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
    version: config.version || '1.0.0'
  }

  const content = {
    ...config,
    name: `@welcome-ui/icons.${key}`,
    sideEffects: false,
    main: `dist/icons.${key}.cjs.js`,
    module: `dist/icons.${key}.es.js`,
    version: config.version || '1.0.0',
    publishConfig: {
      access: 'public'
    },
    dependencies: {
      '@welcome-ui/icon': `^${version}`
    },
    peerDependencies: {
      react: '^16.10.2 || ^17.0.1',
      'react-dom': '^16.10.2 || ^17.0.1'
    },
    license: 'MIT'
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
export const ${iconName}Icon = props => <Icon alt="${iconName}" content={content} {...props} />
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
    // contents.js
    writeIconContentsJson(outputFolder, content, key)
    // index.js
    writeIconIndexJs(outputFolder, iconName)
  })

  console.log('Success'.green, 'Writing individual icon packages')
  return files
}

// Write root icon files
const writeRootIconPackage = files => {
  console.log('Started'.blue, 'Writing root icon files'.grey)
  // Write main icons/index.js
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
    dependencies
  }
  const fileContent = `${JSON.stringify(rootPackageJsonContent, 0, 2)}
`

  fs.writeFileSync(`${ICONS_PATH}/package.json`, fileContent)

  console.log('Success'.green, 'Writing root icon files')
  return files
}

// Write icon font
const writeIconFont = files => {
  console.log('Started'.blue, 'Writing icon font'.grey)
  const filteredFiles = files.filter(file => !FLAG_ICONS.includes(file.key))
  const unicodeFile = `${ICON_FONT_PATH}/unicode.json`
  const unicodeMap = require(unicodeFile)
  const newIcons = difference(filteredFiles.map(file => file.key), Object.keys(unicodeMap))

  if (!newIcons.length && !argv.force) {
    console.log('Success'.yellow, 'No new icons to write to icon font')
    return files
  }

  // Add new icons to unicodeMap (adding one to hex value for each new icon)
  const newUnicodeMap = newIcons.reduce((arr, key) => {
    const lastUnicodeEntry = arr[Object.keys(unicodeMap).pop()]
    const newUnicodeEntry = (parseInt(lastUnicodeEntry, 16) + 0x1).toString(16)
    arr[key] = `\f${newUnicodeEntry}`
    return arr
  }, unicodeMap)

  // Write the updated unicode map
  const fileContent = `${JSON.stringify(newUnicodeMap, 0, 2)}
`
  fs.writeFileSync(unicodeFile, fileContent)

  console.debug(unicodeFile)

  // Generate web fonts
  webfontsGenerator(
    {
      files: filteredFiles.map(file => `${INPUT_PATH}/${file.key}.svg`),
      dest: `${ICON_FONT_PATH}/fonts`,
      fontName: 'welcome-icon-font',
      css: false,
      codepoints: newUnicodeMap
    },
    error => {
      if (error) {
        console.error('Fail!', error)
      } else {
        console.log('Success'.green, 'Writing icon font')
      }
    }
  )

  return files
}

// Main function: Read icons from folder and update all icon (packages)
readIconsFromAssets()
  .then(writeIconPackages)
  .then(writeRootIconPackage)
  .then(writeIconFont)
  .catch(err => {
    throw err
  })
