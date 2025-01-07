import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '../../theme'

export type ThemeCheckboxes = {
  checked: CSSObject
  default: CSSObject
  disabled: CSSObject
}

export const getCheckboxes = (theme: ThemeValues): ThemeCheckboxes => {
  const { colors, radii, toRem } = theme
  return {
    default: {
      width: toRem(16),
      height: toRem(16),
      flexShrink: 0,
      borderRadius: radii.sm,
    },
    disabled: {
      borderColor: colors['beige-60'],
    },
    checked: {
      color: colors['neutral-90'],
      backgroundColor: colors['primary-40'],
      borderColor: colors['primary-40'],
    },
  }
}
