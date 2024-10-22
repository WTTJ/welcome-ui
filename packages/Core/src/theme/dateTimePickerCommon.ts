import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeDateTimePickerCommon = {
  item: {
    selected: CSSObject
    today: CSSObject
  }
}

export const getDateTimePickerCommon = (theme: WuiTheme): ThemeDateTimePickerCommon => {
  const { colors, fontWeights } = theme

  return {
    item: {
      selected: {
        color: colors['neutral-90'],
        fontWeight: fontWeights.bold,
        backgroundColor: colors['primary-40'],
        outline: 'none',
      },
      today: {
        color: colors['neutral-90'],
        fontWeight: fontWeights.bold,
      },
    },
  }
}
