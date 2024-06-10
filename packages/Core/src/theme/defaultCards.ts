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
  backgroundColor: colors['light-900'],
  borderStyle: 'solid',
  borderWidth: borderWidths.sm,
  borderColor: colors.border,
})
