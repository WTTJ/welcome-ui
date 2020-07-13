import kebabCase from 'lodash.kebabcase'
import { exec } from 'child_process'
import 'colors'

const handleFileChange = () => {
  const args = process.argv.slice(2).filter(arg => arg !== '')
  const [dir, packageFolder] = args[0].split('/')
  if (dir === 'packages') {
    const packageName = kebabCase(packageFolder)
    console.log(`Building ${packageFolder}…`.grey)
    exec(`yarn build --scope @welcome-ui/${packageName}`, err => {
      if (err) {
        // node couldn't execute the command
        console.error(err)
        return
      }
      console.log(`✔ ${packageFolder} built`.green)
    })
  }
}

handleFileChange()
