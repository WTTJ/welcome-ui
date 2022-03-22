const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
})
module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  basePath: process.env.VERSION ? `/${process.env.VERSION}` : undefined,
})
