const withMDX = require('@next/mdx')()

const basePath = process.env.VERSION ? `/${process.env.VERSION}` : undefined

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  basePath,
  publicRuntimeConfig: {
    basePath,
  },
})
