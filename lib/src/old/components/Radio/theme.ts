import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@old/theme'

export type ThemeRadios = {
  checked: CSSObject
  checkedCenteredColor: {
    default: string
    disabled: string
  }
  default: CSSObject
}

export const getRadios = (theme: ThemeValues): ThemeRadios => {
  const { colors, toRem } = theme

  return {
    checked: {
      borderColor: colors['primary-40'],
      color: colors['neutral-90'],
    },
    checkedCenteredColor: {
      default: colors['primary-40'],
      disabled: colors['beige-60'],
    },
    default: {
      height: toRem(16),
      width: toRem(16),
    },
  }
}
