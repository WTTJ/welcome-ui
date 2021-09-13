const { exec } = require('child_process')

const esbuild = require('esbuild')
const { nodeExternalsPlugin } = require('esbuild-node-externals')
const { argv } = require('yargs')

const commonConfig = {
  bundle: true,
  minify: true,
  target: ['esnext'],
  plugins: [nodeExternalsPlugin()],
}

const { config, input, name } = argv

const build = (name, input = 'index.tsx', config) => {
  exec('mkdir -p dist/types && cp -R types dist/types')

  esbuild
    .build({
      ...commonConfig,
      outfile: `dist/${name}.es.js`,
      format: 'esm',
      entryPoints: [input],
      ...config,
    })
    .catch(() => process.exit(1))

  esbuild
    .build({
      ...commonConfig,
      outfile: `dist/${name}.cjs.js`,
      format: 'cjs',
      entryPoints: [input],
      ...config,
    })
    .catch(() => process.exit(1))
}

build(name, input, config)
