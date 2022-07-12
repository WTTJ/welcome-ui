import { CSSObject } from 'styled-components'

import { ThemeFocus } from './focus'
import { WuiTheme } from './types'

export type ThemeCloseButton = {
  default: CSSObject
  hover: CSSObject
  active: CSSObject
  focus: ReturnType<ThemeFocus>
}

export const getCloseButton = (theme: WuiTheme): ThemeCloseButton => {
  const { colors, focus } = theme
  return {
    default: {
      backgroundColor: colors['nude.200'],
      color: colors['nude.200'],
      borderColor: colors['nude.200'],
    },
    hover: {
      backgroundColor: colors['nude.100'],
      color: colors['nude.100'],
      borderColor: colors['nude.100'],
    },
    active: {
      backgroundColor: colors['nude.400'],
      color: colors['nude.400'],
      borderColor: colors['nude.400'],
    },
    focus: focus(colors['nude.700']),
  }
}
