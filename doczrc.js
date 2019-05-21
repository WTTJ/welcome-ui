import { welcomeTheme } from './src/theme/welcome'
import { createTheme } from './src/theme/core'

const theme = createTheme(welcomeTheme)

export default {
  base: '/welcome-ui/',
  dest: '/docs',
  wrapper: 'wrapper',
  hashRouter: true,
  htmlContext: {
    favicon: 'https://cdn.welcometothejungle.co/wttj-front/assets/images/favicon.ico'
  },
  themeConfig: {
    colors: {
      primary: theme.colors.primary[500]
    },
    styles: {
      body: {
        fontFamily: theme.fontFamilies.texts,
        'nav a': {
          fontSize: theme.fontSizes.body3
        },
        '#root nav dl a': {
          fontWeight: theme.fontWeights.regular
        },
        'div.react-live span div': {
          boxSizing: 'content-box'
        }
      },
      h1: {
        fontFamily: theme.fontFamilies.headings,
        fontSize: theme.fontSizes.h1,
        fontWeight: theme.fontWeights.bold,
        marginBottom: '1rem'
      },
      h2: {
        fontFamily: theme.fontFamilies.headings,
        fontSize: theme.fontSizes.h2,
        fontWeight: theme.fontWeights.bold,
        textTransform: 'uppercase',
        color: theme.colors.secondary[500],
        borderBottom: 'none',
        marginTop: '4rem'
      },
      h3: {
        fontFamily: theme.fontFamilies.headings,
        fontSize: theme.fontSizes.h3,
        fontWeight: theme.fontWeights.bold,
        textTransform: 'uppercase'
      }
    },
    logo: {
      src:
        'https://cdn.welcometothejungle.co/common/assets/images/logos/wttj-long-original-dark.svg',
      width: 200
    }
  },
  port: 3020
}
