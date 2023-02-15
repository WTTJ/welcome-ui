/* eslint-disable no-console, @typescript-eslint/no-var-requires */
const path = require('path')

const { build } = require('esbuild')
const { replace } = require('esbuild-plugin-replace')

const args = process.argv.slice(2)

const packagePath = path.resolve('.')
const entryPoint = path.resolve(packagePath, 'src')

const env = args.reduce((acc, arg) => {
  const [key, value] = arg.split('=')
  return { ...acc, [key]: value }
}, {})

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
  plugins: [
    replace({
      __BRANCH__: env['BRANCH'],
      __ICON_FONT_HASH__: env['ICON_FONT_HASH'],
    }),
  ],
}

;(() => {
  build({ ...options, format: 'cjs', outfile: 'dist/index.cjs.js' })
  build({ ...options, format: 'esm', outfile: 'dist/index.es.js' })
})()
