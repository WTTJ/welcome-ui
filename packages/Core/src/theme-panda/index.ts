import { definePreset } from '@pandacss/dev'

import { tokens } from './tokens'
import { breakpoints } from './breakpoints'
import { keyframes } from './keyframes'
import { textStyles } from './textStyles'
import { globalCss } from './globalCss'

export const preset = definePreset({
  theme: {
    extend: {
      tokens,
      breakpoints,
      keyframes,
      textStyles,
    },
  },
  globalCss,
})
