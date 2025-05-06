/* eslint-disable no-console */

const { accessSync, existsSync, readdirSync, writeFileSync } = require('fs')
const { join, resolve } = require('path')

const { withCustomConfig } = require('react-docgen-typescript')

const tsConfigPath = join(process.cwd(), 'lib', 'tsconfig.json')

const shouldDisplayPropsFiles = [
  'lib/src/dist/types/utils/field-styles.d.ts',
  'lib/src/dist/types/components/Button/index.d.ts',
  'lib/src/dist/types/components/InputText/index.d.ts',
  'lib/node_modules/ariakit/ts/Tab/TabStore.d.ts',
]

// Get only ComponentOptions declarations for prevent all WuiProps
const propFilter = prop => {
  if (prop.declarations?.length > 0) {
    const isOptionDeclaration = prop.declarations.find(declaration => {
      if (declaration.name.includes('Options')) return true

      return shouldDisplayPropsFiles.includes(declaration.fileName)
    })

    return Boolean(isOptionDeclaration)
  }

  return true
}

const { parse } = withCustomConfig(tsConfigPath, {
  propFilter,
  shouldExtractValuesFromUnion: true,
  shouldRemoveUndefinedFromOptional: true,
})

const isComponentFile = file => {
  if (file === 'index.tsx') {
    return true
  }

  const [name, extension] = file.split('.')
  const firstLetter = name[0]

  // Components start with capital letter e.g. Title.js
  if (extension === 'tsx' && firstLetter === firstLetter.toUpperCase()) {
    return true
  }

  return false
}

// Get all files in a component folder
const getComponentFiles = async folder => {
  const componentFiles = await readdirSync(folder)

  return componentFiles.filter(isComponentFile)
}

// Get definitions from file
const getFileDefinitions = absolutePath => {
  console.log(absolutePath)
  const definitions = parse(absolutePath)

  return definitions
}

// Write properties.json file
const writePropsFile = (file, content) => {
  const withDocsPath = existsSync(join(file, 'docs'))

  if (withDocsPath) {
    const destPath = join(file, 'docs', 'properties.json')

    writeFileSync(destPath, JSON.stringify(content, null, 2))
  }

  return
}

// check if props entries are empty
const arePropsEmpty = obj => {
  // Helper function to check if an object is empty
  const isEmptyObject = obj => {
    return obj && typeof obj === 'object' && Object.keys(obj).length === 0
  }

  // Iterate through all keys in the object
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Object.entries(obj).every(([_, value]) => {
    // If there's a props object, check if it's empty
    if (value && typeof value === 'object' && 'props' in value) {
      return isEmptyObject(value.props)
    }
    return true // If no props object, consider it valid
  })
}

async function generateTypesDoc() {
  const parentDirectory = resolve(__dirname, '../')
  const componentsDir = resolve(parentDirectory, 'lib/src/components')

  // Read all directories in the components folder with a docs folder
  const componentDirs = readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => {
      if (!dirent.isDirectory()) return false
      // Check if the directory has a docs folder
      try {
        accessSync(join(componentsDir, dirent.name, 'docs'))
        return true
      } catch {
        return false
      }
    })
    .map(dirent => dirent.name)

  // Get all files in each component folder
  componentDirs.map(async dirent => {
    console.log('Generating properties.json for', dirent)
    const componentDir = resolve(parentDirectory, 'lib/src/components', dirent)
    const files = await getComponentFiles(componentDir)

    // Get definitions from each file
    files.forEach(async file => {
      const definitions = getFileDefinitions(`${componentDir}/${file}`)
      const componentProps = {}

      definitions.forEach(definition => {
        const { displayName, props, tags } = definition
        const name = tags?.name || displayName

        if (props) {
          componentProps[name] = {
            props: Object.keys(props)
              .sort()
              .reduce((obj, key) => {
                obj[key] = props[key]
                return obj
              }, {}),
            tag: tags?.tag,
          }
        }
      })
      console.log(componentProps)
      // Write properties.json file check before if has no props
      if (!arePropsEmpty(componentProps)) {
        await writePropsFile(componentDir, componentProps)
      }
    })
  })
}

async function main() {
  await generateTypesDoc()
}

main().catch(console.error)
