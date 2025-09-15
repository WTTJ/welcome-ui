import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@old/theme'

export type ThemeBreadcrumbs = {
  item: {
    active: CSSObject
    default: CSSObject
    hover: CSSObject
  }
  list: CSSObject
  separator: CSSObject
}

export const getBreadcrumbs = (theme: ThemeValues): ThemeBreadcrumbs => {
  const { colors, space, texts } = theme

  return {
    item: {
      active: {
        color: colors['neutral-70'],
      },
      default: {
        color: colors['neutral-60'],
        textDecoration: 'none',
      },
      hover: {
        color: colors['neutral-70'],
      },
    },
    list: {
      ...texts['subtitle-sm'],
      padding: `${space.sm} 0`,
    },
    separator: {
      color: colors['neutral-50'],
      padding: `0 ${space.xs}`,
    },
  }
}
