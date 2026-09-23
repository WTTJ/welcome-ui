import type { OutputAsset, OutputChunk } from 'rollup'
import type { Plugin } from 'vite'

type ChunkWithImportedCss = OutputChunk & { viteMetadata?: { importedCss?: Set<string> } }

export function injectCssImportsPlugin() {
  const plugin: Plugin = {
    generateBundle(_options, bundle) {
      const files = Object.values(bundle)
      const assets = files.filter((file): file is OutputAsset => file.type === 'asset')

      const chunksWithImportedCss = files
        .filter((file): file is OutputChunk => file.type === 'chunk')
        .map(chunk => ({ chunk, importedCss: getImportedCss(chunk) }))
        .filter(({ importedCss }) => importedCss.size > 0)

      const claimedCss = new Set(
        chunksWithImportedCss.flatMap(({ importedCss }) => [...importedCss])
      )

      chunksWithImportedCss.forEach(({ chunk, importedCss }) => {
        const imports = [...importedCss].map(cssFile => `import './${cssFile}';\n`).join('')
        const useClientMatch = chunk.code.match(/^(["']use client["'];\s*)/)

        chunk.code = useClientMatch
          ? chunk.code.replace(useClientMatch[0], `${useClientMatch[0]}${imports}`)
          : imports + chunk.code
      })

      // Fail loudly rather than silently publishing a CSS asset no chunk ever loads.
      assets
        .filter(asset => asset.fileName.endsWith('.css') && !claimedCss.has(asset.fileName))
        .forEach(asset => {
          this.error(
            `Orphaned CSS asset "${asset.fileName}": no JS chunk imports it. Check assetFileNames/chunkFileNames in rollupOptions.output.`
          )
        })
    },
    name: 'inject-css-imports',
  }

  return plugin
}

function getImportedCss(chunk: OutputChunk): Set<string> {
  return (chunk as ChunkWithImportedCss).viteMetadata?.importedCss ?? new Set()
}
