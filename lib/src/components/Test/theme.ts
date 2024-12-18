import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '../../theme'

export type ThemeTest = {
  default: CSSObject
}

export const getTest = (theme: ThemeValues) => {
  const { colors } = theme
  return {
    default: {
      backgroundColor: colors['primary-50'],
    },
  }
}
