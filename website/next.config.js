const { watch } = require('fs')
const { join, resolve } = require('path')

const { generateWebsiteExamplesPages } = require('./loaders/generate-examples')
const { generateTypesDoc } = require('./loaders/generate-types-doc')

function watchTypes() {
  const watchPath = join(process.cwd(), '../lib/src/components')
  const timeouts = new Map()

  watch(watchPath, { recursive: true }, (eventType, filename) => {
    // Check if it's a ts/tsx file and not in docs or tests folders
    if (
      filename &&
      /\.(ts|tsx)$/.test(filename) &&
      !filename.includes('/docs/') &&
      !filename.includes('/tests/')
    ) {
      // Extract component folder name from path
      const componentFolder = filename.split('/')[0]

      // Clear existing timeout for this component
      if (timeouts.has(componentFolder)) {
        clearTimeout(timeouts.get(componentFolder))
      }

      // Set new timeout for this component
      timeouts.set(
        componentFolder,
        setTimeout(async () => {
          await generateTypesDoc(componentFolder)
          timeouts.delete(componentFolder)
        }, 1000)
      )
    }
  })
}

const watchExamples = () => {
  const watchPath = join(process.cwd(), '../lib/src/components')
  let timeoutId = null

  watch(watchPath, { recursive: true }, (eventType, filename) => {
    if (filename?.includes('/docs/')) {
      clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        if (eventType === 'rename') {
          generateWebsiteExamplesPages()
        }
      }, 1000)
    }
  })
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
  },
  output: 'export',
  webpack: (config, { isServer }) => {
    if (process.env.NODE_ENV === 'development' && isServer) {
      if (!global.__WATCHERS_INITIALIZED__) {
        watchTypes()
        watchExamples()
        global.__WATCHERS_INITIALIZED__ = true
      }
    }
    config.module.rules.push({
      include: [resolve(__dirname, '../lib/src')],
      test: /\.(js|jsx|ts|tsx)$/,
      use: [resolve(__dirname, 'loaders/use-client-loader.js')],
    })
    return config
  },
}

module.exports = nextConfig
