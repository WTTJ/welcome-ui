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
    .then(files => Promise.all(files.map(file => {
      const [key, type] = file.split('.')
      if (type === 'svg') {
        return fs
          .readFileAsync(path.join(inputPath, file), 'utf8')
          .then(content => ({ key, content }))
      }
    })))
    .then(files => files.filter(Boolean))
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
  const iconRootConfig = fs.readFileSync(`${iconPath}/package.json`)
  const { version } = JSON.parse(iconRootConfig.toString())

  let config = {}
  if (fs.existsSync(file)) {
    config = fs.readFileSync(file)
    config = JSON.parse(config.toString())
  }
  icons[key] = {
    name: toPascalCase(key),
    version: config.version
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
  const content = `import React from 'react'
  import { Icon } from '@welcome-ui/icon'
  import content from './content.js'
  export const ${iconName}Icon = props => <Icon content={content} alt="${iconName}" {...props} />
`
}

// Write icons 
const writeIconPackages = files => {
  console.debug('writeIconPackages', files)
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

  // Write main icons/index.js
  const rootIndexContent = files.reduce((acc, { key }) => {
    const iconName = toPascalCase(key)
    return `${acc}
    export { ${iconName}Icon } from '@welcome-ui/icons.${key}'`
  }, '')
  fs.writeFileSync(`${iconsPath}/index.js`, rootIndexContent)

  // Write main icons/package.json
  let config = fs.readFileSync(`${iconsPath}/package.json`)
  config = JSON.parse(config.toString())

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
  fs.writeFileSync(
    `${iconsPath}/package.json`,
    `${JSON.stringify(rootPackageJsonContent, 0, 2)}
`
  )

  return
}

// Main function: Read icons from folder and update all icon (packages)
readIconsFromAssets()
  .then(writeIconPackages)
  // eslint-disable-next-line no-console
  .then(() => console.log('SVGs successfully written to json'))
  .catch(err => {
    throw err
  })
