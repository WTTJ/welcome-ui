const esbuild = require('esbuild')
const { dtsPlugin } = require('esbuild-plugin-d.ts')

const commonConfig = {
  entryPoints: ['index.tsx'],
  bundle: false,
  minify: true,
  target: ['esnext'],
  plugins: [
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
