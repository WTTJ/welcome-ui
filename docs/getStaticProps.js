const path = require('path')
const fs = require('fs/promises')

export async function getStaticProps() {
  const propTypes = {}
  const packages = await fs.readdir(path.join(process.cwd(), 'docs', 'pages', 'components'))

  packages.forEach(file => {
    const packageName = file.replace('.mdx', '')

    try {
      const packageProps = require(`@welcome-ui/${packageName}/dist/${packageName}.doc.json`)

      Object.keys(packageProps).forEach(key => {
        propTypes[key] = packageProps[key]
      })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`@welcome-ui/${packageName}/dist/${packageName}.doc.json is missing`)
    }
  })

  return {
    props: {
      propTypes,
    },
  }
}
