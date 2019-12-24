const path = require('path')
const fs = require('fs')
const util = require('util')

fs.readFileAsync = util.promisify(fs.readFile)
fs.readdirAsync = util.promisify(fs.readdir)
fs.writeFileAsync = util.promisify(fs.writeFile)

const rootPath = path.join(__dirname, '../icons')
const inputPath = path.join(rootPath, '_assets')

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

const writeContents = files => {
  const indexContent = files
    .map(({ content, key }) => {
      const outputFolder = `${rootPath}/${key}`
      let svgContent = /<svg[^>]*>([\s\S]*)<\/svg>/g.exec(content)
      if (svgContent) {
        svgContent = svgContent[1].replace(/fill="#\w{6}"/g, 'fill="currentColor"').trim()
      }
      if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder)
      }
      fs.writeFileSync(
        `${outputFolder}/index.js`,
        `export default {
  width: 15,
  height: 15,
  block:
    '${svgContent}'
}
`
      )
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
            }
          },
          0,
          2
        )}
`
      )

      return key
    })
    .reduce(
      (acc, file) => `${acc}
export { default as ${file} } from './${file}'`,
      ''
    )

  fs.writeFileSync(`${rootPath}/index.js`, indexContent)

  return
}

const writeIcons = readIconFiles()
  .then(addAllFiles)
  .then(writeContents)
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
