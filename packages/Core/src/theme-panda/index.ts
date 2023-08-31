import { definePreset } from '@pandacss/dev'

import { tokens } from './tokens'
import { recipes } from './recipes'
import { slotRecipes } from './slotRecipes'
import { breakpoints } from './breakpoints'
import { textStyles } from './textStyles'
import { globalCss } from './globalCss'

export * from './tokens'
export * from './recipes'
export * from './breakpoints'
export * from './textStyles'
export * from './globalCss'

export const preset = definePreset({
  theme: {
    extend: {
      tokens,
      recipes,
      slotRecipes,
      breakpoints,
      textStyles,
    },
  },
  globalCss,
})
