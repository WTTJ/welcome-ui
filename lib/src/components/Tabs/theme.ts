import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@/theme'

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

// we want to keep Size in a natural order for documentation
// eslint-disable-next-line perfectionist/sort-union-types
type Size = 'sm' | 'md'

export const getTabs = (theme: ThemeValues): ThemeTabs => {
  const { borderWidths, colors, fontSizes, fontWeights, lineHeights, space } = theme

  return {
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
    badge: {
      maxHeight: space.lg,
    },
    icon: {
      maxHeight: space.lg,
      maxWidth: space.lg,
    },
    item: {
      active: {
        color: colors['neutral-90'],
      },
      default: {
        color: colors['neutral-70'],
        fontWeight: fontWeights.medium,
        lineHeight: lineHeights.md,
        textDecoration: 'none',
      },
      disabled: {
        color: colors['neutral-60'],
      },
      focus: {
        color: colors['neutral-90'],
      },
      size: {
        md: {
          fontSize: fontSizes.md,
        },
        sm: {
          fontSize: fontSizes.sm,
        },
      },
    },
    panel: {
      horizontal: {
        '&:focus': {
          outline: 'none',
        },
        marginTop: space.xl,
      },
      vertical: {
        '&:focus': {
          outline: 'none',
        },
      },
    },
    tabsBorder: {
      horizontal: {
        boxShadow: `inset 0 -${borderWidths.sm} 0 ${colors['neutral-30']}`,
      },
      vertical: {
        boxShadow: `inset -${borderWidths.sm} 0 0 ${colors['neutral-30']}`,
      },
    },
  }
}
