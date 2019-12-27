const path = require('path')
const fs = require('fs')
const util = require('util')

fs.readFileAsync = util.promisify(fs.readFile)
fs.readdirAsync = util.promisify(fs.readdir)
fs.writeFileAsync = util.promisify(fs.writeFile)

const rootPath = path.join(__dirname, '..')
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

const writeContents = ({ content, outputFolder }) => {
  let svgContent = /<svg[^>]*>([\s\S]*)<\/svg>/g.exec(content)
  if (svgContent) {
    svgContent = svgContent[1].replace(/fill="#\w{6}"/g, 'fill="currentColor"').trim()
  }
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder)
  }
  fs.writeFileSync(
    `${outputFolder}/content.js`,
    `export default {
  width: 15,
  height: 15,
  block:
    '${svgContent}'
}
`
  )
}

const writePackageJson = ({ key, outputFolder }) => {
  let config = {}
  const pkgFile = `${outputFolder}/package.json`
  if (fs.existsSync(pkgFile)) {
    config = fs.readFileSync(pkgFile)
    config = JSON.parse(config.toString())
  }

  fs.writeFileSync(
    pkgFile,
    `${JSON.stringify(
      {
        ...config,
        name: `@welcome-ui/icons.${key}`,
        sideEffects: false,
        main: `dist/icons.${key}.cjs.js`,
        module: `dist/icons.${key}.es.js`,
        publishConfig: {
          access: 'public'
        },
        peerDependencies: {
          react: '^16.10.2',
          'react-dom': '^16.10.2'
        }
      },
      0,
      2
    )}
`
  )
}

const writeNpmIgnore = ({ outputFolder }) => {
  const npmFile = `${outputFolder}/.npmignore`
  if (fs.existsSync(npmFile)) {
    return
  }

  fs.writeFileSync(
    npmFile,
    `/*
!/dist/*.js
`
  )
}

const writeIndex = ({ key, outputFolder }) => {
  const indexFile = `${outputFolder}/index.js`

  fs.writeFileSync(
    indexFile,
    `import React from 'react'

import { Icon } from '../../packages/Icon'

import content from './content.js'

export const ${toPascalCase(key)}Icon = props => <Icon content={content} {...props} />
`
  )
}

const updateIcons = files => {
  const svgContent = files
    .map(({ content, key }) => {
      const outputFolder = `${iconsPath}/${key}`
      writeContents({ content, outputFolder })
      writePackageJson({ key, outputFolder })
      writeNpmIgnore({ outputFolder })
      writeIndex({ key, outputFolder })

      return key
    })
    .reduce(
      (acc, file) => `${acc}
export { default as ${file} } from './${file}'`,
      ''
    )

  fs.writeFileSync(`${iconsPath}/svg.js`, svgContent)

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

module.exports = {
  writeIcons,
  readIconFiles,
  addAllFiles
}
