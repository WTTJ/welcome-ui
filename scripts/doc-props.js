/* eslint-disable no-console, @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs/promises')
const { existsSync } = require('fs')

const { argv } = require('yargs')
const docgen = require('react-docgen-typescript')

const { name: packageName } = argv
const tsConfigPath = path.join(process.cwd(), 'tsconfig.json')

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

const getComponentFiles = async () => {
  const componentFiles = await fs.readdir('src')

  return componentFiles.filter(isComponentFile)
}

const getFileDefinitions = file => {
  const absolutePath = path.join(process.cwd(), 'src', file)
  const definitions = parse(absolutePath)

  return definitions
}

const writePropsFile = async content => {
  const withDocsPath = existsSync(path.join(process.cwd(), 'docs'))

  if (withDocsPath) {
    const destPath = path.join(process.cwd(), 'docs', 'properties.json')

    await fs.writeFile(destPath, JSON.stringify(content, null, 2))
  }

  return
}

;(async () => {
  if (!packageName) {
    console.error('No package name provided, please add a `--name` option')
    return
  }

  const files = await getComponentFiles(packageName)
  const componentProps = {}

  files.forEach(file => {
    const definitions = getFileDefinitions(file)

    definitions.forEach(definition => {
      const { displayName, props, tags } = definition
      const name = tags.name || displayName

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
  })

  await writePropsFile(
    Object.keys(componentProps)
      .sort()
      .reduce((obj, key) => {
        obj[key] = componentProps[key]
        return obj
      }, {})
  )
})()
