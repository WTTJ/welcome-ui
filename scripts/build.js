#!/usr/bin/env node

/*
Usage: yarn build [component name...] [options] [lerna options]
  By default, only updated packages will be built.
  All lerna options will be forwarded onto lerna commands.
  Options:
    [component name...]       space separated list of package names to build
    -a, --all                 build all packages
*/

/* eslint-disable no-console */

const ROOT_PATH = process.cwd()

const { exec, spawnSync } = require('child_process')

const { lernaOptions, tdsOptions, userPackageNames } = require('./parse-args')

const getPackageNames = forceUpdatedPackages =>
  new Promise((resolve, reject) => {
    if (!forceUpdatedPackages && userPackageNames.length > 0) {
      return resolve(userPackageNames)
    }

    const command = tdsOptions.all ? 'ls' : 'updated'

    exec(`npx lerna ${command} --json ${lernaOptions.join(' ')}`, (error, stdout) => {
      if (stdout === '') {
        console.log('No components have been changed, nothing to do. Exiting.')
        return reject()
      } else {
        const packageNames = JSON.parse(stdout).map(pkg => pkg.name)
        return resolve(packageNames)
      }
    })
  })

const runBuilds = packageNames => {
  const scopeGlob = packageNames.length === 1 ? packageNames[0] : `{${packageNames.join(',')}}`

  return spawnSync(
    'npx',
    [
      'lerna',
      'exec',
      '--scope',
      scopeGlob,
      '--no-private',
      '--',
      `PROJECT_ROOT=${ROOT_PATH} rollup --config ${ROOT_PATH}/rollup.config.js`
    ],
    {
      stdio: 'inherit'
    }
  )
}

getPackageNames()
  .then(runBuilds)
  .catch(e => {
    console.error(e)
    process.exit(0)
  })
