export async function getStaticProps(ctx, x) {
  // Only import on server
  const reactDocs = require('react-docgen')
  const path = require('path')
  const fs = require('fs')

  let propTypes = { fish: 'mackerel' }

  // Use react-docgen to get proptypes
  // Loop through all packages and add object with all propTypes?
  try {
    const cwd = process.cwd()
    const packages = fs.readdirSync(path.join(cwd, 'packages'))

    propTypes = packages.reduce((prev, name) => {
      try {
        const file = fs.readFileSync(path.join(cwd, `packages/${name}/index.js`), 'utf8')
        const { props } = reactDocs.parse(file)
        if (!props) {
          return prev
        }
        return { ...prev, [name]: props }
      } catch (e) {
        return prev
      }
    }, {})
  } catch (e) {
    console.error(e)
  } finally {
    return { props: { propTypes } }
  }
}
