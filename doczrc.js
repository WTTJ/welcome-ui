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
        fontFamily: theme.fontFamily.texts,
        'nav a': {
          fontSize: theme.fontSize.body3
        },
        '#root nav dl a': {
          fontWeight: theme.fontWeight.regular
        },
        'div.react-live span div': {
          boxSizing: 'content-box'
        }
      },
      h1: {
        fontFamily: theme.fontFamily.headings,
        fontSize: theme.fontSize.h1,
        fontWeight: theme.fontWeight.bold,
        marginBottom: '1rem'
      },
      h2: {
        fontFamily: theme.fontFamily.headings,
        fontSize: theme.fontSize.h2,
        fontWeight: theme.fontWeight.black,
        textTransform: 'uppercase',
        color: theme.colors.secondary[500],
        borderBottom: 'none',
        marginTop: '4rem'
      },
      h3: {
        fontFamily: theme.fontFamily.headings,
        fontSize: theme.fontSize.h3,
        fontWeight: theme.fontWeight.bold,
        textTransform: 'uppercase'
      }
    },
    logo: {
      src: 'https://cdn.welcometothejungle.co/wttj-front/assets/images/logos/wttj-long.svg',
      width: 200
    }
  },
  port: 3020
}
