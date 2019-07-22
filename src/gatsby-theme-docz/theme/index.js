import baseTheme from 'gatsby-theme-docz/src/theme'
import { merge } from 'lodash/fp'

import { welcomekitTheme } from '../../../../src/theme/welcomekit'
import { createTheme } from '../../../../src/theme/core'

const theme = createTheme(welcomekitTheme)

export default merge(baseTheme, {
  colors: {
    primary: theme.colors.primary[500],
    header: {
      bg: theme.colors.nude[100]
    },
    sidebar: {
      navGroup: theme.colors.dark[500],
      navLink: theme.colors.dark[500],
      navLinkActive: theme.colors.primary[500],
      tocLink: theme.colors.dark[500],
      tocLinkActive: theme.colors.primary[500]
    }
  },
  styles: {
    root: {
      fontFamily: theme.fonts.texts,
      fontSize: theme.fontSizes.body1
    },
    a: {
      color: theme.colors.primary[500],
      textDecoration: 'none',
      '&:hover': {
        color: theme.colors.primary[500],
        textDecoration: 'underline'
      }
    }
  }
})
