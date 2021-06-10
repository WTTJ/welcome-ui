const withMDX = require('@next/mdx')()

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack(config) {
    config.module.rules.push({
      type: 'javascript/auto',
      test: /\.mjs$/,
      use: []
    })
    return config
  }
})
