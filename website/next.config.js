// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    externalDir: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: [path.resolve(__dirname, '../lib/src')],
      use: [path.resolve(__dirname, 'loaders/use-client-loader.js')],
    })
    return config
  },
}

module.exports = nextConfig
