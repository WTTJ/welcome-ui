import { CSSObject } from '@xstyled/system'

import { ThemeBorderWidths } from './borders'
import { ThemeColors } from './colors'
import { ThemeRadii } from './radii'

export type ThemeDefaultCards = CSSObject

export const getDefaultCards = ({
  borderWidths,
  colors,
  radii,
}: {
  borderWidths: ThemeBorderWidths
  colors: ThemeColors
  radii: ThemeRadii
}): ThemeDefaultCards => ({
  backgroundColor: colors.light[900],
  borderRadius: radii.md,
  borderStyle: 'solid',
  borderWidth: borderWidths.sm,
  borderColor: colors.light[800],
})
