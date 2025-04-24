import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@/theme'

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
        backgroundColor: colors['primary-40'],
        color: colors['neutral-90'],
        fontWeight: fontWeights.bold,
        outline: 'none',
      },
      today: {
        color: colors['neutral-90'],
        fontWeight: fontWeights.bold,
      },
    },
  }
}
