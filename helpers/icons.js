const path = require('path')
const fs = require('fs')
const util = require('util')

fs.readFileAsync = util.promisify(fs.readFile)
fs.readdirAsync = util.promisify(fs.readdir)
fs.writeFileAsync = util.promisify(fs.writeFile)

const rootPath = path.join(__dirname, '../src/components/Icon')
const inputPath = path.join(rootPath, 'assets')
const outputPath = path.join(rootPath, 'icons.js')

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
    let match = /<svg[^>]*>([\s\S]*)<\/svg>/g.exec(content)
    if (match) {
      match = match[1].replace(/#134B45/g, 'currentColor').trim()
      return {
        ...acc,
        [key]: {
          width: 15,
          height: 15,
          block: match
        }
      }
    }

    return acc
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
