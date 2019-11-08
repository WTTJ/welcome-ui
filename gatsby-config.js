module.exports = {
  plugins: [
    'gatsby-theme-docz',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/docs/`
      }
    }
  ]
}
