const isComponentFile = file => {
  if (file === 'index.tsx') {
    return true
  }

  const [name, extension] = file.split('.')
  const firstLetter = name[0]

  // Components start with capital letter e.g. Title.tsx
  if (extension === 'tsx' && firstLetter === firstLetter.toUpperCase()) {
    return true
  }

  return false
}

// Get only ComponentOptions declarations for prevent all WuiProps
const propFilter = prop => {
  if (prop.declarations?.length > 0) {
    const isOptionDeclaration = prop.declarations.find(declaration => {
      return declaration.name.includes('Options')
    })
    return Boolean(isOptionDeclaration)
  }
  return true
}

export async function getStaticProps() {
  // Only import on server
  const path = require('path')
  const fs = require('fs')
  const reactDocs = require('react-docgen-typescript').withCustomConfig(
    path.join(process.cwd(), './tsconfig.json'),
    { propFilter }
  )

  let propTypes = {}

  const cwd = process.cwd()
  const packages = fs.readdirSync(path.join(cwd, 'packages'))

  // Loop through all packages…
  packages.forEach(packageName => {
    console.log('packageName', packageName)
    const componentFiles = fs
      .readdirSync(path.join(cwd, `packages/${packageName}`))
      .filter(isComponentFile)

    // Loop through all component files for a package and add to prepped propTypes object
    componentFiles.forEach(file => {
      const [result] = reactDocs.parse(path.join(cwd, `packages/${packageName}/${file}`))
      const { props } = result || {}

      if (!props) return

      let key = packageName
      if (file !== 'index.tsx') {
        const [filename] = file.split('.')
        key = `${key}.${filename}`
      }
      propTypes[key] = props
    })
  })
  return { props: { propTypes } }
}
