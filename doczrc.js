import { welcomeTheme } from './src/theme/welcome'
import { createTheme } from './src/theme/core'

const theme = createTheme(welcomeTheme)

export default {
  wrapper: 'wrapper',
  hashRouter: true,
  htmlContext: {
    favicon: 'https://cdn.welcometothejungle.co/wttj-front/assets/images/favicon.ico'
  },
  themeConfig: {
    colors: {
      primary: theme.colors.primary
    },
    styles: {
      body: {
        fontFamily: theme.fontFamily.texts,
        'nav a': {
          fontSize: theme.fontSize.sm
        }
      },
      h1: {
        fontFamily: theme.fontFamily.headings,
        fontSize: theme.fontSize.xxxl,
        fontWeight: theme.fontWeight.bold,
        marginBottom: '1rem'
      },
      h2: {
        fontFamily: theme.fontFamily.headings,
        fontSize: theme.fontSize.xl,
        fontWeight: theme.fontWeight.black,
        textTransform: 'uppercase',
        color: theme.colors.secondary,
        borderBottom: 'none',
        marginTop: '4rem'
      },
      h3: {
        fontFamily: theme.fontFamily.headings,
        fontSize: theme.fontSize.md,
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
