import { createStitches } from '@stitches/react'

import { colors } from '../Core/theme/colors'
import { space } from '../Core/theme/space'
import { fontWeights } from '../Core/theme/typography'
import { borderWidths } from '../Core/theme/borders'
import { transitions } from '../Core/theme/transitions'

export const { styled } = createStitches({
  theme: {
    colors,
    space,
    fontWeights,
    borderWidths,
    transitions,
  },
  media: {},
  utils: {},
})
