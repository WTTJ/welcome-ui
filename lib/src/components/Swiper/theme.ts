import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '../../theme'

export type ThemeSwipers = {
  navigation: {
    bullet: {
      active: CSSObject
      default: CSSObject
    }
  }
}

export const getSwipers = (theme: ThemeValues): ThemeSwipers => {
  const { colors } = theme

  return {
    navigation: {
      bullet: {
        active: { backgroundColor: colors['primary-40'] },
        default: { backgroundColor: colors['beige-40'] },
      },
    },
  }
}
