const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Breadcrumb',
    description:
      'Customizable design system with react • styled-components • styled-system and reakit.',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          '/Users/mesniltheo/Documents/development/wttj/welcome-ui/packages/Breadcrumb/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Breadcrumb',
        description:
          'Customizable design system with react • styled-components • styled-system and reakit.',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            '/Users/mesniltheo/Documents/development/wttj/welcome-ui/packages/Breadcrumb',
          templates:
            '/Users/mesniltheo/Documents/development/wttj/welcome-ui/node_modules/docz-core/dist/templates',
          docz:
            '/Users/mesniltheo/Documents/development/wttj/welcome-ui/packages/Breadcrumb/.docz',
          cache:
            '/Users/mesniltheo/Documents/development/wttj/welcome-ui/packages/Breadcrumb/.docz/.cache',
          app:
            '/Users/mesniltheo/Documents/development/wttj/welcome-ui/packages/Breadcrumb/.docz/app',
          appPackageJson:
            '/Users/mesniltheo/Documents/development/wttj/welcome-ui/packages/Breadcrumb/package.json',
          appTsConfig:
            '/Users/mesniltheo/Documents/development/wttj/welcome-ui/packages/Breadcrumb/tsconfig.json',
          gatsbyConfig:
            '/Users/mesniltheo/Documents/development/wttj/welcome-ui/packages/Breadcrumb/gatsby-config.js',
          gatsbyBrowser:
            '/Users/mesniltheo/Documents/development/wttj/welcome-ui/packages/Breadcrumb/gatsby-browser.js',
          gatsbyNode:
            '/Users/mesniltheo/Documents/development/wttj/welcome-ui/packages/Breadcrumb/gatsby-node.js',
          gatsbySSR:
            '/Users/mesniltheo/Documents/development/wttj/welcome-ui/packages/Breadcrumb/gatsby-ssr.js',
          importsJs:
            '/Users/mesniltheo/Documents/development/wttj/welcome-ui/packages/Breadcrumb/.docz/app/imports.js',
          rootJs:
            '/Users/mesniltheo/Documents/development/wttj/welcome-ui/packages/Breadcrumb/.docz/app/root.jsx',
          indexJs:
            '/Users/mesniltheo/Documents/development/wttj/welcome-ui/packages/Breadcrumb/.docz/app/index.jsx',
          indexHtml:
            '/Users/mesniltheo/Documents/development/wttj/welcome-ui/packages/Breadcrumb/.docz/app/index.html',
          db:
            '/Users/mesniltheo/Documents/development/wttj/welcome-ui/packages/Breadcrumb/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
