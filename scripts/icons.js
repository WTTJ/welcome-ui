const path = require('path')
const fs = require('fs')
const util = require('util')

fs.readFileAsync = util.promisify(fs.readFile)
fs.readdirAsync = util.promisify(fs.readdir)
fs.writeFileAsync = util.promisify(fs.writeFile)

const rootPath = path.join(__dirname, '..')
const iconPath = path.join(rootPath, 'packages/Icon')
const iconsPath = path.join(rootPath, 'icons')
const inputPath = path.join(iconsPath, '_assets')

const toPascalCase = str => {
  const camelCase = str.replace(/_(\w)/g, ($, $1) => $1.toUpperCase())
  return `${camelCase.charAt(0).toUpperCase()}${camelCase.substr(1)}`
}

const readIconFiles = () => fs.readdirAsync(inputPath)

const addAllFiles = files => {
  const promises = files.map(file => {
    const [key, type] = file.split('.')
    if (type === 'svg') {
      const fileConf = fs
        .readFileAsync(path.join(inputPath, file), 'utf8')
        .then(content => ({ key, content }))
      return fileConf
    }
  })

  // eslint-disable-next-line no-undef
  return Promise.all(promises)
}

const writeContents = (file, content) => {
  let svgContent = /<svg[^>]*>([\s\S]*)<\/svg>/g.exec(content)
  if (svgContent) {
    svgContent = svgContent[1].replace(/fill="#\w{6}"/g, 'fill="currentColor"').trim()
  }
  fs.writeFileSync(file, getContent(svgContent))
}

const writePackageJson = (file, key) => {
  let iconConfig = fs.readFileSync(`${iconPath}/package.json`)
  iconConfig = JSON.parse(iconConfig.toString())

  let config = {}
  if (fs.existsSync(file)) {
    config = fs.readFileSync(file)
    config = JSON.parse(config.toString())
  }
  fs.writeFileSync(file, getPackageJsonContent(config, key, iconConfig.version))
}

const updateIcons = files => {
  const svgContent = files
    .map(({ content, key }) => {
      // Create folder if necessary
      const iconName = toPascalCase(key)
      const outputFolder = `${iconsPath}/${iconName}`
      if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder)
      }
      // package.json
      writePackageJson(`${outputFolder}/package.json`, key)
      // .npmignore
      fs.writeFileSync(`${outputFolder}/.npmignore`, getNpmIgnoreContent())
      // contents.js
      writeContents(`${outputFolder}/content.js`, content)
      // index.js
      fs.writeFileSync(`${outputFolder}/index.js`, getIndexContent(iconName))

      return key
    })
    .reduce((acc, file) => {
      const iconName = toPascalCase(file)
      return `${acc}
export * from './${iconName}'`
    }, '')
  // Write main icons/index.js
  fs.writeFileSync(`${iconsPath}/index.js`, svgContent)

  return
}

const writeIcons = readIconFiles()
  .then(addAllFiles)
  .then(updateIcons)
  // eslint-disable-next-line no-console
  .then(() => console.log('SVGs successfully written to json'))
  .catch(err => {
    throw err
  })

// .npmignore
const getNpmIgnoreContent = () => `/*
!/dist/*.js
`

// index.js
const getIndexContent = iconName => `import React from 'react'
import { Icon } from '@welcome-ui/icon'
import content from './content.js'
export const ${iconName}Icon = props => <Icon content={content} alt="${iconName}" {...props} />
`

// package.json
const getPackageJsonContent = (config, key, iconVersion) => {
  const content = {
    ...config,
    name: `@welcome-ui/icons.${key}`,
    sideEffects: false,
    main: `dist/icons.${key}.cjs.js`,
    module: `dist/icons.${key}.es.js`,
    publishConfig: {
      access: 'public'
    },
    dependencies: {
      '@welcome-ui/icon': `^${iconVersion}`
    },
    peerDependencies: {
      react: '^16.10.2',
      'react-dom': '^16.10.2'
    }
  }
  return `${JSON.stringify(content, 0, 2)}
`
}

// content.js
const getContent = svgContent => `export default {
  width: 15,
  height: 15,
  block:
    '${svgContent}'
}
`

module.exports = {
  writeIcons,
  readIconFiles,
  addAllFiles
}
