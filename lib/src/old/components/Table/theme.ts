import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@old/theme'

export type ThemeTables = {
  td: CSSObject
  th: CSSObject
  tr: {
    clickable: CSSObject
    danger: CSSObject
    default: CSSObject
    info: CSSObject
    success: CSSObject
    warning: CSSObject
  }
}

export const getTables = (theme: ThemeValues): ThemeTables => {
  const { borderWidths, colors, fontWeights, space } = theme

  return {
    td: {
      padding: space.xl,
      textAlign: 'left',
    },
    th: {
      borderBottomColor: colors['neutral-90'],
      borderBottomStyle: 'solid',
      borderBottomWidth: borderWidths.sm,
      color: colors['neutral-60'],
      fontWeight: fontWeights.medium,
      textAlign: 'left',
    },
    tr: {
      clickable: {
        cursor: 'pointer',
      },
      danger: {
        backgroundColor: colors['red-10'],
        color: colors['red-70'],
      },
      default: {
        borderBottomColor: colors['neutral-30'],
        borderBottomStyle: 'solid',
        borderBottomWidth: borderWidths.sm,
      },
      info: {
        backgroundColor: colors['blue-10'],
        color: colors['blue-70'],
      },
      success: {
        backgroundColor: colors['green-10'],
        color: colors['green-70'],
      },
      warning: {
        backgroundColor: colors['orange-10'],
        color: colors['orange-80'],
      },
    },
  }
}
