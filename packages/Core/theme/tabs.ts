import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeTabs = {
  tabsBorder: {
    horizontal: CSSObject
    vertical: CSSObject
  }
  item: {
    default: CSSObject
    active: CSSObject
    focus: CSSObject
    disabled: CSSObject
  }
  panel: {
    vertical: CSSObject
    horizontal: CSSObject
  }
  activeBar: {
    horizontal: CSSObject
    vertical: CSSObject
  }
}

export const getTabs = (theme: WuiTheme): ThemeTabs => {
  const { borderWidths, colors, fontSizes, fontWeights, space } = theme

  return {
    tabsBorder: {
      horizontal: {
        boxShadow: `inset 0 -${borderWidths.sm} 0 ${colors.dark[100]}`,
      },
      vertical: {
        boxShadow: `inset -${borderWidths.sm} 0 0 ${colors.dark[100]}`,
      },
    },
    item: {
      default: {
        color: colors.dark[500],
        fontWeight: fontWeights.medium,
        fontSize: fontSizes.md,
        textDecoration: 'none',
      },
      active: {
        color: colors.dark[900],
      },
      focus: {
        color: colors.dark[900],
      },
      disabled: {
        color: colors.dark[200],
      },
    },
    panel: {
      vertical: {
        '&:focus': {
          outline: 'none',
        },
      },
      horizontal: {
        marginTop: space.xl,
        '&:focus': {
          outline: 'none',
        },
      },
    },
    activeBar: {
      horizontal: {
        background: colors.primary[400],
        height: borderWidths.lg,
      },
      vertical: {
        background: colors.primary[400],
        width: borderWidths.lg,
      },
    },
  }
}
