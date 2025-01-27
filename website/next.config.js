/* eslint-disable @typescript-eslint/no-var-requires */
const { join, resolve } = require('path')
const { watch } = require('fs')

const { generateWebsiteExamplesPages } = require('./loaders/generate-examples')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    externalDir: true,
  },
  webpack: (config, { isServer }) => {
    if (process.env.NODE_ENV === 'development' && isServer) {
      const watchPath = join(process.cwd(), '../lib/src/components')
      let timeoutId = null

      watch(watchPath, { recursive: true }, (eventType, filename) => {
        if (filename?.includes('/docs/examples/')) {
          clearTimeout(timeoutId)
          timeoutId = setTimeout(() => {
            if (eventType === 'rename') {
              generateWebsiteExamplesPages()
            }
          }, 1000)
        }
      })
    }
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: [resolve(__dirname, '../lib/src')],
      use: [resolve(__dirname, 'loaders/use-client-loader.js')],
    })
    return config
  },
}

module.exports = nextConfig
