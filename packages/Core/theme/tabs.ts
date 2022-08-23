import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

type Size = 'sm' | 'md'

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
  size: Record<Size, CSSObject>
  icon: CSSObject
  badge: CSSObject
}

export const getTabs = (theme: WuiTheme): ThemeTabs => {
  const { borderWidths, colors, fontSizes, fontWeights, lineHeights, space } = theme

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
        lineHeight: lineHeights.md,
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
        background: colors.primary[500],
        height: borderWidths.lg,
      },
      vertical: {
        background: colors.primary[500],
        width: borderWidths.lg,
      },
    },
    size: {
      sm: {
        paddingBottom: space.sm,
        marginRight: space.md,
      },
      md: {
        paddingBottom: space.lg,
        marginRight: space.xl,
      },
    },
    icon: {
      maxWidth: space.lg,
      maxHeight: space.lg,
    },
    badge: {
      maxHeight: space.lg,
    },
  }
}
