import { colors } from './colors'
import { radii } from './radii'
import { toRem } from './typography'

export const tooltips = ({ defaultFontSize }) => ({
  background: colors.primary[700],
  color: colors.light[200],
  'border-radius': radii.md,
  'max-width': toRem(200, defaultFontSize)
})
