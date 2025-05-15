const { existsSync, readdirSync, writeFileSync } = require('fs')
const { join, resolve } = require('path')

const docgen = require('react-docgen-typescript')

const tsConfigPath = join(process.cwd(), '../lib', 'tsconfig.json')

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

const { parse } = docgen.withCustomConfig(tsConfigPath, {
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

async function generateTypesDoc(component) {
  // eslint-disable-next-line no-console
  console.log('Generating properties.json for', component, '...')
  const parentDirectory = resolve(__dirname, '../../')
  const componentDirectory = join(parentDirectory, 'lib/src/components', component)

  // Get all files in each component folder
  const files = await getComponentFiles(componentDirectory)

  // Get definitions from each file
  files.forEach(async file => {
    const definitions = getFileDefinitions(`${componentDirectory}/${file}`)
    let componentProps = {}

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

    // eslint-disable-next-line no-console
    console.log('Properties updated ✅')

    // Write properties.json file check before if has no props
    if (!arePropsEmpty(componentProps)) {
      await writePropsFile(componentDirectory, componentProps)
    }
  })
}

module.exports = { generateTypesDoc }
