import { join, resolve } from 'path'
import fs, { existsSync } from 'fs'

import docgen from 'react-docgen-typescript'

const tsConfigPath = join(process.cwd(), 'tsconfig.json')

const shouldDisplayPropsFiles = [
  'packages/Utils/dist/types/field-styles.d.ts',
  'packages/Button/dist/types/index.d.ts',
  'packages/InputText/dist/types/index.d.ts',
  'welcome-ui/node_modules/ariakit/ts/Tab/TabStore.d.ts',
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
  shouldRemoveUndefinedFromOptional: true,
  shouldExtractValuesFromUnion: true,
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
const getComponentFiles = async (folder: string) => {
  const componentFiles = await fs.readdirSync(folder)

  return componentFiles.filter(isComponentFile)
}

// Get definitions from file
const getFileDefinitions = absolutePath => {
  const definitions = parse(absolutePath)

  return definitions
}

// Write properties.json file
const writePropsFile = async (file, content) => {
  const withDocsPath = existsSync(join(file, 'docs'))

  if (withDocsPath) {
    const destPath = join(file, 'docs', 'properties.json')

    await fs.writeFileSync(destPath, JSON.stringify(content, null, 2))
  }

  return
}

export async function generateTypesDoc() {
  const parentDirectory = resolve(__dirname, '../')
  const componentsDir = resolve(parentDirectory, 'src/components')

  // Read all directories in the components folder with a docs folder
  const componentDirs = fs
    .readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => {
      if (!dirent.isDirectory()) return false
      // Check if the directory has a docs folder
      try {
        fs.accessSync(join(componentsDir, dirent.name, 'docs'))
        return true
      } catch {
        return false
      }
    })
    .map(dirent => dirent.name)

  // Get all files in each component folder
  componentDirs.map(async dirent => {
    const files = await getComponentFiles(resolve(parentDirectory, 'src/components', dirent))

    // Get definitions from each file
    files.forEach(async file => {
      const absolutePath = join(process.cwd(), 'src', 'components', dirent)
      const definitions = getFileDefinitions(`${absolutePath}/${file}`)
      const componentProps = {}

      definitions.forEach(definition => {
        const { displayName, props, tags } = definition
        const name = tags?.name || displayName

        if (props) {
          componentProps[name] = {
            tag: tags?.tag,
            props: Object.keys(props)
              .sort()
              .reduce((obj, key) => {
                obj[key] = props[key]
                return obj
              }, {}),
          }
        }
      })

      // Write properties.json file check before if has no props
      if (componentProps?.[0]?.props?.length > 0) {
        await writePropsFile(absolutePath, componentProps)
      }
    })
  })
}
