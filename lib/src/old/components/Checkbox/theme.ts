import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@old/theme'

export type ThemeCheckboxes = {
  checked: CSSObject
  default: CSSObject
  disabled: CSSObject
}

export const getCheckboxes = (theme: ThemeValues): ThemeCheckboxes => {
  const { colors, radii, toRem } = theme
  return {
    checked: {
      backgroundColor: colors['primary-40'],
      borderColor: colors['primary-40'],
      color: colors['neutral-90'],
    },
    default: {
      borderRadius: radii.sm,
      flexShrink: 0,
      height: toRem(16),
      width: toRem(16),
    },
    disabled: {
      borderColor: colors['beige-60'],
    },
  }
}
