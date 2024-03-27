import { hexToRGBA } from '@welcome-ui/utils'
import { CSSObject } from '@wttj/xstyled-styled-components'

import { ThemeColors } from './colors'

export type ThemeFocus = (
  color?: string,
  transparency?: number
) => {
  boxShadow: CSSObject['boxShadow']
}

export const getFocus = ({ colors }: { colors: ThemeColors }) => {
  function focus(color = colors['primary-500'], transparency = 1) {
    let transformedColor = color

    if (!color.startsWith('rgba')) {
      transformedColor = hexToRGBA(color, transparency)
    }

    return {
      boxShadow: `0 0 0 2px ${transformedColor}`,
    }
  }

  return focus
}
