/* eslint-disable no-console */
import { exec } from 'child_process'

import { toKebabCase } from '../utils/strings'
import 'colors'

const handleFileChange = () => {
  const args = process.argv.slice(2).filter(arg => arg !== '')
  const [dir, packageFolder, file] = args[0].split('/')
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  if (dir === 'packages') {
    let packageName = toKebabCase(packageFolder)
    if (packageName === 'icon-font') {
      packageName = 'icons.font'
    }
    console.log(`Building ${packageFolder}…`.grey)
    exec(`yarn build --scope @welcome-ui/${packageName}`, err => {
      if (err) {
        console.error(err)
        return
      }
      console.log(
        `${hours}:${minutes} -`,
        'build',
        'success'.green.bold,
        '-',
        `@welcome-ui/${packageName}`
      )
    })
    if (file === 'theme.js') {
      console.log(`Building Core…`.grey)
      exec(`yarn build --scope @welcome-ui/core`, err => {
        if (err) {
          console.error(err)
          return
        }
        console.log(`${hours}:${minutes} -`, 'build', 'success'.green.bold, '-', `@welcome-ui/core`)
      })
    }
  }
}

handleFileChange()
