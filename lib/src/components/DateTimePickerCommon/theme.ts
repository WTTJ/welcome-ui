import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '../../theme'

export type ThemeDateTimePickerCommon = {
  item: {
    selected: CSSObject
    today: CSSObject
  }
}

export const getDateTimePickerCommon = (theme: ThemeValues): ThemeDateTimePickerCommon => {
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
