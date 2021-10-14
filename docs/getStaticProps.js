export async function getStaticProps(packageName) {
  console.log(packageName)
  // Only import on server
  const docgen = require('react-docgen-typescript')
  const path = require('path')
  const fs = require('fs')

  let propTypes = {}

  // Use react-docgen to get proptypes
  const cwd = process.cwd()
  // Loop through all packages…
  const component = fs.readFileSync(path.join(cwd, `packages/${packageName}/index.tsx`), 'utf8')

  if (!component) {
    return { props: { propTypes } }
  }

  // Loop through all component files for a package and add to prepped propTypes object
  try {
    const options = {
      savePropValueAsString: true,
    }
    const docs = docgen.parse(path.join(cwd, `packages/${packageName}/index.tsx`), options)
    const props = docs[0]?.props
    console.debug('getStaticProps', docs)
    if (!props) {
      return { props: { propTypes } }
    }

    propTypes[packageName] = props
  } catch (e) {
    console.error({ packageName, component, e: e.message })
    return
  }

  console.debug('getStaticProps', { propTypes })
  return { props: { propTypes } }
}
