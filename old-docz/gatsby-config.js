module.exports = {
  plugins: [
    'gatsby-theme-docz',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-56009608-24'
      }
    }
  ]
}
