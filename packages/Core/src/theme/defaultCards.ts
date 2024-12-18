import { CSSObject } from '@xstyled/styled-components'

import { ThemeBorderWidths } from './borders'
import { ThemeColors } from './colors'

export type ThemeDefaultCards = CSSObject

export const getDefaultCards = ({
  borderWidths,
  colors,
}: {
  borderWidths: ThemeBorderWidths
  colors: ThemeColors
}): ThemeDefaultCards => ({
  backgroundColor: colors['neutral-10'],
  borderStyle: 'solid',
  borderWidth: borderWidths.sm,
  borderColor: colors['neutral-30'],
})
