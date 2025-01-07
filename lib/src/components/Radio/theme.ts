import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '../../theme'

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
    default: {
      width: toRem(16),
      height: toRem(16),
    },
    checked: {
      color: colors['neutral-90'],
      borderColor: colors['primary-40'],
    },
    checkedCenteredColor: {
      default: colors['primary-40'],
      disabled: colors['beige-60'],
    },
  }
}
