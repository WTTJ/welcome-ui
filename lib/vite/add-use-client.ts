import type { Plugin } from 'vite'

export function addUseClientDirectivePlugin() {
  const plugin: Plugin = {
    name: 'add-use-client',
    transform(code: string, id: string) {
      let clientString = ''
      // Only add for client-side and not css or scss files (adjust the filter as needed)
      if (!id.endsWith('.css') && !id.endsWith('.scss')) {
        clientString = "'use client';\n"
      }

      return {
        code: `${clientString}${code}`,
        map: null,
      }
    },
  }

  return plugin
}
