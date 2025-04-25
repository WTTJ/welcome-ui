import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeColors } from './colors'

export type ThemeFocus = (color?: string) => {
  boxShadow: CSSObject['boxShadow']
}

export const getFocus = ({ colors }: { colors: ThemeColors }) => {
  function focus(color = colors['primary-40']) {
    return {
      boxShadow: `0 0 0 2px ${color}`,
    }
  }

  return focus
}
