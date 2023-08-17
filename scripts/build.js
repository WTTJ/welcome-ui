/* eslint-disable no-console, @typescript-eslint/no-var-requires */
const path = require('path')

const { build } = require('esbuild')
const { replace } = require('esbuild-plugin-replace')
const { argv } = require('yargs')

const args = process.argv.slice(2)
const { useClient } = argv

const packagePath = path.resolve('.')
const entryPoint = path.resolve(packagePath, 'src')

console.log(useClient)

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
      __ICON_FONT_HASH__: env['ICON_FONT_HASH'],
    }),
  ],
  banner: {
    js: useClient ? '"use client"' : '',
  },
}

;(() => {
  build({ ...options, format: 'cjs', outfile: 'dist/index.js' })
  build({ ...options, format: 'esm', outfile: 'dist/index.mjs' })
})()
