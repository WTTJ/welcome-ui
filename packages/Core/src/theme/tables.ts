import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeTables = {
  th: CSSObject
  td: CSSObject
  tr: {
    default: CSSObject
    error: CSSObject
    warning: CSSObject
    info: CSSObject
    success: CSSObject
    clickable: CSSObject
  }
}

export const getTables = (theme: WuiTheme): ThemeTables => {
  const { borderWidths, colors, fontWeights, space } = theme

  return {
    th: {
      color: colors['neutral-50'],
      fontWeight: fontWeights.medium,
      textAlign: 'left',
      borderBottomColor: colors['neutral-black'],
      borderBottomWidth: borderWidths.sm,
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      padding: space.xl,
    },
    tr: {
      default: {
        borderBottomColor: colors.border,
        borderBottomWidth: borderWidths.sm,
        borderBottomStyle: 'solid',
      },
      error: {
        backgroundColor: colors['danger-10'],
        color: colors['danger-50'],
      },
      warning: {
        backgroundColor: colors['warning-10'],
        color: colors['warning-50'],
      },
      info: {
        backgroundColor: colors['info-10'],
        color: colors['info-50'],
      },
      success: {
        backgroundColor: colors['success-10'],
        color: colors['success-50'],
      },
      clickable: {
        cursor: 'pointer',
      },
    },
  }
}
