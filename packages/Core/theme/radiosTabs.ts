import { WuiTheme } from './types'

type HoverAttributes = {
  '&:hover': {
    backgroundColor: string
  }
}

export type ThemeRadioTabs = {
  default: HoverAttributes
  checked: {
    backgroundColor: string
    color: string
    borderColor: string
  } & HoverAttributes
}

export const getRadioTabs = (theme: WuiTheme): ThemeRadioTabs => {
  const { colors } = theme

  return {
    default: {
      '&:hover': {
        backgroundColor: colors.nude[200]
      }
    },
    checked: {
      backgroundColor: colors.primary[500],
      color: colors.light[900],
      borderColor: colors.primary[500],
      '&:hover': {
        backgroundColor: colors.primary[200]
      }
    }
  }
}
