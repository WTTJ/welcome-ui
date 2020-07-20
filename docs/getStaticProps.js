const isComponentFile = file => {
  if (file === 'index.js') {
    return true
  }

  const [name, extension] = file.split('.')
  const firstLetter = name[0]

  // Components start with capital letter e.g. Title.js
  if (extension === 'js' && firstLetter === firstLetter.toUpperCase()) {
    return true
  }

  return false
}

export async function getStaticProps() {
  // Only import on server
  const reactDocs = require('react-docgen')
  const path = require('path')
  const fs = require('fs')

  let propTypes = {}

  // Use react-docgen to get proptypes
  const cwd = process.cwd()
  const packages = fs.readdirSync(path.join(cwd, 'packages'))

  // Loop through all packages…
  packages.forEach(packageName => {
    const componentFiles = fs
      .readdirSync(path.join(cwd, `packages/${packageName}`))
      .filter(isComponentFile)

    // Loop through all component files for a package and add to prepped propTypes object
    componentFiles.forEach(file => {
      const content = fs.readFileSync(path.join(cwd, `packages/${packageName}/${file}`), 'utf8')
      try {
        const { props } = reactDocs.parse(content)
        if (!props) {
          return undefined
        }

        let key = packageName
        if (file !== 'index.js') {
          const [filename] = file.split('.')
          key = `${key}.${filename}`
        }
        propTypes[key] = props
      } catch (e) {
        return undefined
      }
    })
  })
  console.log('PropTypes found for', Object.keys(propTypes))
  return { props: { propTypes } }
}
