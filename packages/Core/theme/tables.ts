import { WuiTheme } from './types'

type CommonAttributes = {
  color?: string
  fontWeight?: string
  textAlign?: string
  borderBottomColor: string
  borderBottomWidth: string
  borderBottomStyle: string
}

type VariantAttributes = {
  backgroundColor: string
  color: string
}

export type ThemeTables = {
  th: CommonAttributes
  td: {
    textAlign: string
    padding: string
  }
  tr: {
    default: CommonAttributes
    error: VariantAttributes
    warning: VariantAttributes
    info: VariantAttributes
    success: VariantAttributes
    clickable: {
      cursor: string
    }
  }
}

export const getTables = (theme: WuiTheme): ThemeTables => {
  const { borderWidths, colors, fontWeights, space } = theme

  return {
    th: {
      color: colors.light[100],
      fontWeight: fontWeights.medium,
      textAlign: 'left',
      borderBottomColor: colors.dark[900],
      borderBottomWidth: borderWidths.sm,
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      padding: space.xl
    },
    tr: {
      default: {
        borderBottomColor: colors.light[800],
        borderBottomWidth: borderWidths.sm,
        borderBottomStyle: 'solid'
      },
      error: {
        backgroundColor: colors.danger[100],
        color: colors.danger[700]
      },
      warning: {
        backgroundColor: colors.warning[100],
        color: colors.warning[700]
      },
      info: {
        backgroundColor: colors.info[100],
        color: colors.info[700]
      },
      success: {
        backgroundColor: colors.success[100],
        color: colors.success[700]
      },
      clickable: {
        cursor: 'pointer'
      }
    }
  }
}
