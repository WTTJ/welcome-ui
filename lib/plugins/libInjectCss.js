import fs from 'fs'
import { parse, resolve } from 'path'

let viteConfig

export const libInjectCss = () => {
  return {
    apply: 'build',
    configResolved(resolvedConfig) {
      viteConfig = resolvedConfig
    },
    enforce: 'post',

    name: 'lib-css',

    writeBundle(option, bundle) {
      if (!viteConfig.build && !viteConfig.build.lib) {
        // only for lib build
        // eslint-disable-next-line no-console
        console.warn('vite-plugin-libcss only works in lib mode.')
        return
      }
      if (option.format !== 'es') {
        // only for es built
        return
      }
      const files = Object.keys(bundle)
      const cssFile = files.find(file => file.endsWith('.css'))
      if (!cssFile) {
        return
      }
      for (const file of files) {
        if (!bundle[file].isEntry) {
          // only for entry
          continue
        }
        const outDir = viteConfig.build.outDir || 'dist'
        const filePath = resolve(viteConfig.root, outDir, file)
        const data = fs.readFileSync(filePath, {
          encoding: 'utf8',
        })

        const filePathDepth = file.split('/').length - 1
        const relativePath = Array(filePathDepth).fill('../').join('')

        // does entry file has associated css file
        const hasAssociatedCssFile = bundle[file].viteMetadata?.importedCss?.size

        // find the name of associated css file with its .css extension
        const associatedCssFile =
          hasAssociatedCssFile &&
          bundle[file].viteMetadata.importedCss
            .values()
            .find(cssFileName => parse(cssFileName).name === parse(bundle[file].fileName).name)

        if (hasAssociatedCssFile) {
          // create css import string
          const cssImportString = `import './${relativePath}${associatedCssFile}';`

          // check if 'use client' directive exists
          const hasUseClientDirective =
            data.startsWith(`'use client'`) || data.startsWith(`"use client"`)

          // make an array of file data split by new line
          // CAUTION: this assumes that you don't have a one-liner file. Please adjust accordingly if you do.
          const dataArray = data.split('\n')

          // if 'use client' directive exists, insert css import string at index 1, else insert at index 0
          const indexOfCssImport = hasUseClientDirective ? 1 : 0

          // insert css import string at correct index
          dataArray.splice(indexOfCssImport, 0, cssImportString)

          // make data a string again now that css import string has been added
          const computedDataString = dataArray.join('\n')

          // write the file back with the css import
          fs.writeFileSync(filePath, computedDataString)
        }
      }
    },
  }
}
