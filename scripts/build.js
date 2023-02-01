/* eslint-disable no-console, @typescript-eslint/no-var-requires */
const path = require('path')

const { build } = require('esbuild')

const packagePath = path.resolve(process.argv[2])
const entryPoint = process.argv[3] || 'index.tsx'

const packageJson = path.join(packagePath, 'package.json')
const { name } = require(packageJson)
const packageName = name.replace('@welcome-ui/', '')

const options = {
  entryPoints: {
    index: entryPoint,
  },
  bundle: true,
  sourcemap: false,
  minify: false,
  splitting: false,
  packages: 'external',
  target: ['esnext'],
}

;(() => {
  console.log('start', name)
  build({ ...options, format: 'cjs', outfile: `dist/${packageName}.cjs.js` })
  build({ ...options, format: 'esm', outfile: `dist/${packageName}.es.js` })
  console.log('end', name)
})()
