const withMDX = require('@next/mdx')()

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  basePath: process.env.VERSION ? `/${process.env.VERSION}` : undefined,
})
