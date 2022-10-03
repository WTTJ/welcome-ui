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
      color: colors['dark-500'],
      fontWeight: fontWeights.medium,
      textAlign: 'left',
      borderBottomColor: colors['dark-900'],
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
        backgroundColor: colors['danger-100'],
        color: colors['danger-500'],
      },
      warning: {
        backgroundColor: colors['warning-100'],
        color: colors['warning-500'],
      },
      info: {
        backgroundColor: colors['info-100'],
        color: colors['info-500'],
      },
      success: {
        backgroundColor: colors['success-100'],
        color: colors['success-500'],
      },
      clickable: {
        cursor: 'pointer',
      },
    },
  }
}
