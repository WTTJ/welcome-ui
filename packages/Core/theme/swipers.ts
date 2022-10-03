import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeSwipers = {
  navigation: {
    bullet: {
      active: CSSObject
      default: CSSObject
    }
  }
}

export const getSwipers = (theme: WuiTheme): ThemeSwipers => {
  const { colors } = theme

  return {
    navigation: {
      bullet: {
        active: { backgroundColor: colors['primary-500'] },
        default: { backgroundColor: colors['nude-400'] },
      },
    },
  }
}
