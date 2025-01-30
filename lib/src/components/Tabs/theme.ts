import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '@/theme'

type Size = 'sm' | 'md'

export type ThemeTabs = {
  activeBar: {
    horizontal: CSSObject
    vertical: CSSObject
  }
  badge: CSSObject
  icon: CSSObject
  item: {
    active: CSSObject
    default: CSSObject
    disabled: CSSObject
    focus: CSSObject
    size: Record<Size, CSSObject>
  }
  panel: {
    horizontal: CSSObject
    vertical: CSSObject
  }
  tabsBorder: {
    horizontal: CSSObject
    vertical: CSSObject
  }
}

export const getTabs = (theme: ThemeValues): ThemeTabs => {
  const { borderWidths, colors, fontSizes, fontWeights, lineHeights, space } = theme

  return {
    tabsBorder: {
      horizontal: {
        boxShadow: `inset 0 -${borderWidths.sm} 0 ${colors['neutral-30']}`,
      },
      vertical: {
        boxShadow: `inset -${borderWidths.sm} 0 0 ${colors['neutral-30']}`,
      },
    },
    item: {
      default: {
        color: colors['neutral-70'],
        fontWeight: fontWeights.medium,
        textDecoration: 'none',
        lineHeight: lineHeights.md,
      },
      active: {
        color: colors['neutral-90'],
      },
      focus: {
        color: colors['neutral-90'],
      },
      disabled: {
        color: colors['neutral-50'],
      },
      size: {
        sm: {
          fontSize: fontSizes.sm,
        },
        md: {
          fontSize: fontSizes.md,
        },
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
        background: colors['primary-40'],
        height: borderWidths.md,
      },
      vertical: {
        background: colors['primary-40'],
        width: borderWidths.md,
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
