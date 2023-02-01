/* eslint-disable no-console, @typescript-eslint/no-var-requires */
const path = require('path')

const { build } = require('esbuild')

const packagePath = path.resolve(process.argv[2])
const entryPoint = path.resolve(packagePath, process.argv[3] || 'index.tsx')

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
  build({ ...options, format: 'cjs', outfile: 'dist/index.cjs.js' })
  build({ ...options, format: 'esm', outfile: 'dist/index.es.js' })
})()
