import { readdirSync } from 'fs'
import { join, resolve } from 'path'

import * as docgen from 'react-docgen-typescript'

const tsConfigPath = join(process.cwd(), 'tsconfig.json')

const shouldDisplayPropsFiles = [
  'lib/src/dist/types/utils/field-styles.d.ts',
  'lib/src/dist/types/components/Button/index.d.ts',
  'lib/src/dist/types/components/InputText/index.d.ts',
  'lib/node_modules/ariakit/ts/Tab/TabStore.d.ts',
]

// Get only ComponentOptions declarations for prevent all WuiProps
const propFilter = (prop: docgen.PropItem) => {
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
  shouldRemoveUndefinedFromOptional: true,
  shouldExtractValuesFromUnion: true,
})

const isComponentFile = (file: string) => {
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
const getComponentFiles = (folder: string) => {
  const componentFiles = readdirSync(folder)

  return componentFiles.filter(isComponentFile)
}

// Get definitions from file
const getFileDefinitions = (absolutePath: string) => {
  const definitions = parse(absolutePath)

  return definitions
}

// check if props entries are empty
const arePropsEmpty = (obj: {
  [name: string]: { props: Record<string, unknown>; tag: string }
}) => {
  // Helper function to check if an object is empty
  const isEmptyObject = (obj: unknown) => {
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

export function getComponentProperties(component: string) {
  const parentDirectory = resolve(process.cwd(), '../', 'lib/src/components')
  const componentDir = resolve(parentDirectory, component)

  // Get all files in each component folder
  const files = getComponentFiles(componentDir)

  // Get definitions from each file
  const componentProps: {
    [name: string]: { props: Record<string, unknown>; tag: string }
  } = {}

  files.forEach(file => {
    const absolutePath = join(componentDir, file)
    const definitions = getFileDefinitions(`${absolutePath}`)

    definitions.forEach(definition => {
      const { displayName, props, tags } = definition
      const name = tags?.name || displayName

      if (props) {
        componentProps[name] = {
          tag: tags?.tag,
          props: Object.keys(props)
            .sort()
            .reduce((obj: Record<string, unknown>, key) => {
              obj[key] = props[key]
              return obj
            }, {}),
        }
      }
    })
  })

  // Check before if has no props no avoid showing empty props page
  if (!arePropsEmpty(componentProps)) {
    return componentProps
  }

  return null
}
