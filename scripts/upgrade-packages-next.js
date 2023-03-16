/* eslint-disable @typescript-eslint/no-var-requires */
// This script will help you to upgrade Welcome-UI packages still in prerelease
// node ./scripts/upgrade-packages-next.js "../your-project/package.json"
const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')

const [packageJsonPath = ''] = process.argv.slice(2)
const packageJsonPathResolved = path.resolve(packageJsonPath)

const packageJson = require(packageJsonPathResolved)
const { dependencies } = packageJson

const wuiDeps = Object.keys(dependencies).filter(dep => dep.startsWith('@welcome-ui'))

wuiDeps.forEach(package => {
  const currentVersion = dependencies[package]
  const { data } = JSON.parse(execSync(`yarn info ${package}@next --json`).toString())

  const nextVersion = data['dist-tags'].next
  dependencies[package] = nextVersion || currentVersion
})

fs.writeFileSync(packageJsonPathResolved, JSON.stringify(packageJson, 0, 2))
