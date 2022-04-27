#!/usr/bin/env node

/* eslint-disable no-console, @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs')
const util = require('util')

const { toKebabCase } = require('../utils/strings')

fs.readdirAsync = util.promisify(fs.readdir)
fs.writeFileAsync = util.promisify(fs.writeFile)

const DIRECTORIES = [path.join(__dirname, '../packages')]

const getNewConfig = () => {
  return {
    scripts: {
      build: 'rollup -c',
      watch: 'rollup -c -w',
      test: 'jest',
    },
  }
}

const collectFolders = dir =>
  fs
    .readdirAsync(dir, { withFileTypes: true })
    .then(files => files.filter(f => f.isDirectory()).map(folder => ({ dir, folder })))

const collectPackages = folder =>
  folder
    .filter(
      ({ folder: { name } }) => !(name.startsWith('_') || ['dist', 'node_modules'].includes(name))
    )
    .map(({ dir, folder: { name } }) => ({
      dir,
      pkgName: toKebabCase(name),
      componentName: name,
      config: require(`${dir}/${name}/package.json`),
    }))

const updatePackageConfig = pkg => {
  const { componentName, config, dir, pkgName } = pkg
  const newConfig = {
    ...config,
    ...getNewConfig(),
  }
  fs.writeFileAsync(`${dir}/${componentName}/package.json`, JSON.stringify(newConfig, 0, 2))
    // eslint-disable-next-line no-console
    .then(() => console.debug('Successfully wrote', pkgName))
    .catch(handleError)
}

const handleError = err => {
  // eslint-disable-next-line no-console
  console.error(err)
  throw err
}

DIRECTORIES.forEach(dir =>
  collectFolders(dir)
    .then(collectPackages)
    .then(packages => packages.forEach(updatePackageConfig))
    .catch(handleError)
)
