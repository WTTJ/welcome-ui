import { defineTokens } from '@pandacss/dev'

import { borders } from './borders'
import { colors } from './colors'
import { durations } from './durations'
import { easings } from './easings'
import { fonts } from './fonts'
import { fontSizes } from './fontSizes'
import { fontWeights } from './fontWeights'
import { letterSpacings } from './letterSpacings'
import { lineHeights } from './lineHeights'
import { radii } from './radii'
import { shadows } from './shadows'
import { spacing } from './spacing'

export const tokens = defineTokens({
  borders,
  colors,
  durations,
  easings,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  spacing,
})
