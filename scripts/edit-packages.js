const path = require('path')
const fs = require('fs')
const util = require('util')

const kebabCase = require('lodash.kebabcase')

fs.readdirAsync = util.promisify(fs.readdir)
fs.writeFileAsync = util.promisify(fs.writeFile)

const ROOT_PATH = path.join(__dirname, '../packages')

// UPDATE THIS FUNCTION TO RETURN NEW CONFIG FOR PACKAGE.JSON
// componentName: ConnectedField
// pkgName: connected-field
// config: content of package.json
// eslint-disable-next-line no-unused-vars
const getNewConfig = ({ componentName, config, pkgName }) => {
  return {
    main: `dist/${pkgName}.cjs.js`,
    module: `dist/${pkgName}.es.js`
  }
}

const collectFolders = () =>
  fs
    .readdirAsync(ROOT_PATH, { withFileTypes: true })
    .then(files => files.filter(f => f.isDirectory()))

const collectPackages = folder =>
  folder.map(({ name }) => ({
    pkgName: kebabCase(name),
    componentName: name,
    config: require(`${ROOT_PATH}/${name}/package.json`)
  }))

const updatePackageConfig = pkg => {
  const { componentName, config, pkgName } = pkg
  const newConfig = {
    ...config,
    ...getNewConfig(pkg)
  }
  fs.writeFileAsync(`${ROOT_PATH}/${componentName}/package.json`, JSON.stringify(newConfig, 0, 2))
    // eslint-disable-next-line no-console
    .then(() => console.debug('Successfully wrote', pkgName))
    .catch(handleError)
}

const handleError = err => {
  // eslint-disable-next-line no-console
  console.error(err)
  throw err
}

collectFolders()
  .then(collectPackages)
  .then(packages => packages.forEach(updatePackageConfig))
  .catch(handleError)
