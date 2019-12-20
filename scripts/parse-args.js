const parseArgs = require('minimist')

const TDS_OPTIONS = ['-a', '--all', '-u', '--update-screenshots']

let originalArgs = process.argv.slice(2).filter(arg => arg !== '')

if (originalArgs.length === 1) {
  originalArgs = originalArgs[0].split(' ')
}

const parsedArgs = parseArgs(originalArgs, {
  alias: { a: 'all', u: 'update-screenshots' }
})

const lernaOptions = originalArgs
  .filter(arg => !parsedArgs._.includes(arg))
  .filter(arg => !TDS_OPTIONS.includes(arg))

const tdsOptions = Object.assign({}, parsedArgs)
delete tdsOptions._

module.exports = {
  userPackageNames: parsedArgs._,
  tdsOptions,
  lernaOptions
}
