const path = require('path')
const fs = require('fs')
const util = require('util')

fs.readFileAsync = util.promisify(fs.readFile)
fs.readdirAsync = util.promisify(fs.readdir)
fs.writeFileAsync = util.promisify(fs.writeFile)

const inputPath = path.join(__dirname, '../assets/icons')
const outputPath = path.join(__dirname, '../src/atoms/Icon/icons2.js')

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

  return Promise.all(promises)
}

const getContents = files => {
  return files.reduce((acc, { key, content }) => {
    const match = /<svg[^>]*>([\s\S]*)<\/svg>/g.exec(content)
    return {
      ...acc,
      [key]: {
        width: 15,
        height: 15,
        block: match[1].trim()
      }
    }
  }, {})
}

const writeContents = obj => fs.writeFileAsync(outputPath, `export default ${JSON.stringify(obj)}`)

fs.readdirAsync(inputPath)
  .then(addAllFiles)
  .then(getContents)
  .then(writeContents)
  .then(() => console.log('SVGs successfully written to json'))
  .catch(err => {
    throw err
  })
