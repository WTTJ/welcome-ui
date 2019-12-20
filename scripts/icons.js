const path = require('path')
const fs = require('fs')
const util = require('util')

fs.readFileAsync = util.promisify(fs.readFile)
fs.readdirAsync = util.promisify(fs.readdir)
fs.writeFileAsync = util.promisify(fs.writeFile)

const rootPath = path.join(__dirname, '../packages/Icons')
const inputPath = path.join(rootPath, '_assets')

const addFile = (key, file) =>
  fs.readFileAsync(path.join(inputPath, file), 'utf8').then(content => ({ key, content }))

const addAllFiles = files => {
  const promises = []

  files.forEach(file => {
    const [key, type] = file.split('.')
    if (type === 'svg') {
      promises.push(addFile(key, file))
    }
  })

  // eslint-disable-next-line no-undef
  return Promise.all(promises)
}

const writeContents = files => {
  const indexContent = files.map(({ content, key }) => {
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
  block: '${svgContent}'
}`
    )
    fs.writeFileSync(
      `${outputFolder}/package.json`,
      JSON.stringify({ sideEffects: false, main: './dist/index.cjs.js', module: './dist/index.es.js' }, 0, 2)
    )

    return key
  }).reduce((acc, file) => `${acc}
export { default as ${file} } from './${file}'`, '')
  
  fs.writeFileSync(`${rootPath}/index.js`, indexContent)

  return
}

fs.readdirAsync(inputPath)
  .then(addAllFiles)
  .then(writeContents)
  // eslint-disable-next-line no-console
  .then(() => console.log('SVGs successfully written to json'))
  .catch(err => {
    throw err
  })
