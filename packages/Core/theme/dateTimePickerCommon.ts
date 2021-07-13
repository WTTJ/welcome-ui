import { WuiTheme } from './types'

export type ThemeDateTimePickerCommon = {
  item: {
    selected: {
      color: string
      fontWeight: string
      backgroundColor: string
      outline: string
    }
    today: {
      color: string
      fontWeight: string
    }
  }
}

export const getDateTimePickerCommon = (theme: WuiTheme): ThemeDateTimePickerCommon => {
  const { colors, fontWeights } = theme

  return {
    item: {
      selected: {
        color: colors.light[900],
        fontWeight: fontWeights.bold,
        backgroundColor: colors.primary[500],
        outline: 'none'
      },
      today: {
        color: colors.dark[900],
        fontWeight: fontWeights.bold
      }
    }
  }
}
