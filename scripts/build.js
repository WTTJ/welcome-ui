#!/usr/bin/env node

/*
Usage: yarn build [component name...] [options] [lerna options]
  By default, only updated packages will be built.
  All lerna options will be forwarded onto lerna commands.
  Options:
    [component name...]       space separated list of package names to build
    -a, --all                 build all packages
*/

const { exec, spawnSync } = require('child_process')

const { lernaOptions, tdsOptions, userPackageNames } = require('./parseArgs')

const getPackageNames = (callback, forceUpdatedPackages) => {
  if (!forceUpdatedPackages && userPackageNames.length > 0) {
    callback(userPackageNames)
    return
  }

  const command = tdsOptions.all ? 'ls' : 'updated'

  exec(`npx lerna ${command} --json ${lernaOptions.join(' ')}`, (error, stdout) => {
    if (stdout === '') {
      console.log('No components have been changed, nothing to do. Exiting.')
      process.exit(0)
    } else {
      const packageNames = JSON.parse(stdout).map(pkg => pkg.name)

      callback(packageNames)
    }
  })
}

getPackageNames(packageNames => {
  const scopeGlob = packageNames.length === 1 ? packageNames[0] : `{${packageNames.join(',')}}`

  spawnSync(
    'npx',
    [
      'lerna',
      'exec',
      '--scope',
      scopeGlob,
      '--no-private',
      '--',
      'rollup --config ../../rollup.config.js'
    ],
    {
      stdio: 'inherit'
    }
  )
})
