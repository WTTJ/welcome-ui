const path = require('path')
const fs = require('fs')
const util = require('util')

fs.readFileAsync = util.promisify(fs.readFile)
fs.readdirAsync = util.promisify(fs.readdir)

const rootPath = path.join(__dirname, '../src/components')
const indexPath = path.join(__dirname, '../src/index.js')

fs.readdirAsync(rootPath).then(folders => {
  fs.readFileAsync(indexPath, 'utf8').then(content => {
    const missing = folders.reduce((acc, folder) => {
      const regex = new RegExp(`/${folder}/`, 'g')
      return regex.test(content) ? acc : [...acc, folder]
    }, [])

    if (missing.length) {
      // eslint-disable-next-line no-undef
      Promise.reject(missing)
    }
  })
})

process.on('unhandledRejection', missing => {
  // eslint-disable-next-line no-console
  console.error('Components missing from export:', missing)
  process.exit(1)
})
