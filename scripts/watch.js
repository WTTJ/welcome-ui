/* eslint-disable no-console, @typescript-eslint/no-var-requires */
import { exec } from 'child_process'
import path from 'path'

import 'colors'

const ROOT_PATH = path.join(__dirname, '..')

const handleFileChange = () => {
  const args = process.argv.slice(2).filter(arg => arg !== '')
  const [dir, packageFolder, file] = args[0].split('/')
  const packagePath = path.join(ROOT_PATH, dir, packageFolder)
  const date = `${new Date().getHours()}:${new Date().getMinutes()}`

  if (dir === 'packages') {
    const { component, name } = require(`${packagePath}/package.json`)
    console.log(`Building ${component}…`.grey)

    if (file === 'theme.ts') {
      console.log('Building Core…'.grey)
      exec('npx lerna run build --scope @welcome-ui/core', err => {
        if (err) {
          console.error(err)
          return
        }
        console.log(date, '-', '(っ◔◡◔)っ success'.green.bold, '(core)')
      })

      exec('npx lerna run types --scope @welcome-ui/core', err => {
        if (err) {
          console.error(err)
          return
        }
        console.log(date, '-', '(っ◔◡◔)っ types success'.green.bold, '(core)')
      })

      exec('npx lerna run doc --scope  @welcome-ui/core', err => {
        if (err) {
          console.error(err)
          return
        }
        console.log(date, '-', '(っ◔◡◔)っ doc success'.green.bold, `(${component})`)
      })
    }

    exec(`npx lerna run build --scope ${name}`, err => {
      if (err) {
        console.error(err)
        return
      }
      console.log(date, '-', '(っ◔◡◔)っ success'.green.bold, `(${component})`)
    })

    exec(`npx lerna run types --scope ${name}`, err => {
      if (err) {
        console.error(err)
        return
      }
      console.log(date, '-', '(っ◔◡◔)っ types success'.green.bold, `(${component})`)
    })

    exec(`npx lerna run doc --scope ${name}`, err => {
      if (err) {
        console.error(err)
        return
      }
      console.log(date, '-', '(っ◔◡◔)っ doc success'.green.bold, `(${component})`)
    })
  }
}

handleFileChange()
