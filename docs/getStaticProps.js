const getComponentFile = ({ file, packageName }) => {
  if (file === 'index.js') {
    return packageName
  }
  const [name, extension] = file.split('.')
  const firstLetter = name[0]

  if (extension === 'js' && firstLetter == firstLetter.toUpperCase()) {
    return `${packageName}.${name}`
  }
  return undefined
}

export async function getStaticProps(ctx, x) {
  // Only import on server
  const reactDocs = require('react-docgen')
  const path = require('path')
  const fs = require('fs')

  let propTypes = {}

  // Use react-docgen to get proptypes
  // Loop through all packages and add object with all propTypes?
  try {
    const cwd = process.cwd()
    const packages = fs.readdirSync(path.join(cwd, 'packages'))
    const files = packages.flatMap(packageName =>
      fs
        .readdirSync(path.join(cwd, `packages/${packageName}`))
        .map(file => getComponentFile({ file, packageName }))
        .filter(Boolean)
    )

    propTypes = files.reduce((prev, fileName) => {
      try {
        const [packageName, file] = fileName.split('.')
        const content = fs.readFileSync(
          path.join(cwd, `packages/${packageName}/${file || 'index'}.js`),
          'utf8'
        )
        const { props } = reactDocs.parse(content)
        if (!props) {
          return prev
        }
        const key = file ? `${packageName}.${file}` : packageName
        return { ...prev, [key]: props }
      } catch (e) {
        return prev
      }
    }, {})
    console.debug({ propTypes: Object.keys(propTypes) })
  } catch (e) {
    console.error(e)
  } finally {
    return { props: { propTypes } }
  }
}
