/* eslint-disable no-console */

const path = require('path')
const fs = require('fs')
const util = require('util')

const webfontsGenerator = require('webfonts-generator')
const difference = require('lodash.difference')

fs.readFileAsync = util.promisify(fs.readFile)
fs.readdirAsync = util.promisify(fs.readdir)

const rootPath = path.join(__dirname, '..')
const iconPath = path.join(rootPath, 'packages/Icon')
const iconsPath = path.join(rootPath, 'icons')
const inputPath = path.join(iconsPath, '_assets')
const iconFontPath = path.join(rootPath, 'packages/IconFont')

// State to hold all icons so we don't have to keep reading all the files
let icons = {}

const toPascalCase = str => {
  const camelCase = str.replace(/_(\w)/g, ($, $1) => $1.toUpperCase())
  return `${camelCase.charAt(0).toUpperCase()}${camelCase.substr(1)}`
}

// Read icons/assets/*.svg
const readIconsFromAssets = () => {
  return fs
    .readdirAsync(inputPath)
    .then(files => files.filter(file => {
      const [, type] = file.split('.')
      return type === 'svg'
    }))
    .then(files =>
      Promise.all(
        files.map(file => {
          const [key] = file.split('.')
          return fs
            .readFileAsync(path.join(inputPath, file), 'utf8')
            .then(content => ({ key, content }))
        })
      )
    )
}

// Write content.js for a given icon
const writeIconContentsJs = (outputFolder, content) => {
  let svgContent = /<svg[^>]*>([\s\S]*)<\/svg>/g.exec(content)
  if (svgContent) {
    svgContent = svgContent[1].replace(/fill="#134B45"/g, 'fill="currentColor"').trim()
  }

  const fileContent = `export default {
    width: 15,
    height: 15,
    block:
      '${svgContent}'
  }
`

  fs.writeFileSync(`${outputFolder}/content.js`, fileContent)
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
  const { version } = require(`${iconPath}/package.json`)

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
      react: '^16.10.2',
      'react-dom': '^16.10.2'
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
  import content from './content.js'
  export const ${iconName}Icon = props => <Icon content={content} alt="${iconName}" {...props} />
`

  fs.writeFileSync(file, fileContent)
}

// Write icons
const writeIconPackages = files => {
  console.log('*** Writing individual icon packages ***')
  files.forEach(({ content, key }) => {
    // Create folder if necessary
    const iconName = toPascalCase(key)
    const outputFolder = `${iconsPath}/${iconName}`
    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder)
    }
    // package.json
    writeIconPackageJson(outputFolder, key)
    // .npmignore
    writeIconNpmIgnore(outputFolder)
    // contents.js
    writeIconContentsJs(outputFolder, content)
    // index.js
    writeIconIndexJs(outputFolder, iconName)
  })

  console.log('SVGs successfully written to json')
  return files
}

// Write root icon files
const writeRootIconPackage = files => {
  console.log('*** Writing root icon files ***')
  // Write main icons/index.js
  const rootIndexContent = files.map(({ key }) => {
    const iconName = toPascalCase(key)
    return `export { ${iconName}Icon } from '@welcome-ui/icons.${key}'`
  }).join(`
`)
  fs.writeFileSync(`${iconsPath}/index.js`, rootIndexContent)

  // Write main icons/package.json
  let config = require(`${iconsPath}/package.json`)

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

  fs.writeFileSync(`${iconsPath}/package.json`, fileContent)

  console.log('Icon font successfully written')
  return files
}

// Write icon font
const writeIconFont = files => {
  console.log('*** Writing icon font ***')
  const file = `${iconFontPath}/unicode.json`
  let unicodeMap = require(file)
  const newIcons = difference(files.map(file => file.key), Object.keys(unicodeMap))

  if (!newIcons) {
    return files
  }

  // Add new icons to unicodeMap (adding one to hex value for each new icon)
  const newUnicodeMap = newIcons.reduce((arr, key) => {
    const lastUnicodeEntry = arr[Object.keys(unicodeMap).pop()]
    const newUnicodeEntry = (parseInt(lastUnicodeEntry, 16) + 0x1).toString(16)
    arr[key] = `\f${newUnicodeEntry}`
    return arr
  }, unicodeMap)

  const fileContent = `${JSON.stringify(newUnicodeMap, 0, 2)}
`

  fs.writeFileSync(file, fileContent)

  webfontsGenerator(
    {
      files: files.map(file => `${inputPath}/${file.key}.svg`),
      dest: `${iconFontPath}/fonts`,
      fontName: 'welcome-icon-font',
      codepoints: newUnicodeMap
    },
    error => {
      if (error) {
        console.error('Fail!', error)
      } else {
        console.log('Icon font successfully written')
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
