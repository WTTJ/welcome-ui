import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

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

export const getTables = (theme: WuiTheme): ThemeTables => {
  const { borderWidths, colors, fontWeights, space } = theme

  return {
    th: {
      color: colors['neutral-60'],
      fontWeight: fontWeights.medium,
      textAlign: 'left',
      borderBottomColor: colors['neutral-90'],
      borderBottomWidth: borderWidths.sm,
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      padding: space.xl,
    },
    tr: {
      default: {
        borderBottomColor: colors['neutral-30'],
        borderBottomWidth: borderWidths.sm,
        borderBottomStyle: 'solid',
      },
      danger: {
        backgroundColor: colors['red-10'],
        color: colors['red-70'],
      },
      warning: {
        backgroundColor: colors['orange-10'],
        color: colors['orange-80'],
      },
      info: {
        backgroundColor: colors['blue-10'],
        color: colors['blue-70'],
      },
      success: {
        backgroundColor: colors['green-10'],
        color: colors['green-70'],
      },
      clickable: {
        cursor: 'pointer',
      },
    },
  }
}
