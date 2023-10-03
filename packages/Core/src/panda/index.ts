import { definePreset } from '@pandacss/dev'

import { breakpoints } from './breakpoints'
import { globalCss } from './globalCss'
import { recipes } from './recipes'
import { textStyles } from './textStyles'
import { tokens } from './tokens'
import { utilities } from './utilities'

export * from './breakpoints'
export * from './globalCss'
export * from './textStyles'
export * from './tokens'
export * from './utilities'

export * from './fonts.css'

export const preset = definePreset({
  globalCss,
  theme: {
    breakpoints,
    recipes,
    textStyles,
    tokens,
  },
  utilities: {
    extend: utilities,
  },
})
