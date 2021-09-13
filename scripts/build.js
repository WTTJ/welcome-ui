const esbuild = require('esbuild')
const { dtsPlugin } = require('esbuild-plugin-d.ts')
const { nodeExternalsPlugin } = require('esbuild-node-externals')

const commonConfig = {
  entryPoints: ['index.tsx'],
  bundle: true,
  minify: true,
  target: ['esnext'],
  plugins: [
    nodeExternalsPlugin(),
    dtsPlugin({
      outDir: 'dist',
      tsconfig: 'tsconfig.json',
    }),
  ],
}

const build = (name, config) => {
  esbuild
    .build({
      outfile: `dist/${name}.es.js`,
      format: 'esm',
      ...commonConfig,
      ...config,
    })
    .catch(() => process.exit(1))

  esbuild
    .build({
      outfile: `dist/${name}.cjs.js`,
      format: 'cjs',
      ...commonConfig,
      ...config,
    })
    .catch(() => process.exit(1))
}

module.exports = { build }
