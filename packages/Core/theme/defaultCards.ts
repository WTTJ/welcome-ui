import { ThemeBorderWidths } from './borders'
import { ThemeColors } from './colors'
import { ThemeRadii } from './radii'

export type ThemeDefaultCards = {
  backgroundColor: string
  borderRadius: string
  borderStyle: string
  borderWidth: string
  borderColor: string
}

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
