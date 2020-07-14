/* eslint-disable no-console */
import { exec } from 'child_process'

import { toKebabCase } from '../utils/strings'
import 'colors'

const handleFileChange = () => {
  const args = process.argv.slice(2).filter(arg => arg !== '')
  const [dir, packageFolder] = args[0].split('/')
  if (dir === 'packages') {
    const packageName = toKebabCase(packageFolder)
    console.log(`Building ${packageFolder}…`.grey)
    exec(`yarn build --scope @welcome-ui/${packageName}`, err => {
      if (err) {
        console.error(err)
        return
      }
      console.log('build', 'success'.green.bold, '-', `@welcome-ui/${packageName}`)
    })
  }
}

handleFileChange()
