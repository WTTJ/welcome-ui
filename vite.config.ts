import fs from 'fs'
import { resolve } from 'path'

import { defineConfig } from 'vitest/config'

import { toKebabCase } from './utils/strings'

/* in test mode, we must resolve source files instead of built files */
const resolveSrc = () => {
  const packages = fs.readdirSync(resolve(__dirname, 'packages'))

  const aliases = packages.reduce((aliases, name) => {
    const packageName = `@welcome-ui/${toKebabCase(name)}`
    const packagePath = `packages/${name}/index.tsx`
    const path = fs.existsSync(packagePath)
      ? packagePath
      : packagePath.replace('index.tsx', 'index.ts')

    return { ...aliases, [packageName]: resolve(__dirname, path) }
  }, {})

  aliases['@welcome-ui/icons'] = resolve(__dirname, 'icons/index.ts')

  return aliases
}

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: resolveSrc(),
  },
})
