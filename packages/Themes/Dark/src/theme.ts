import { createTheme, WuiTheme } from '@welcome-ui/core'

import { formatColors } from '../../../Core/src/theme/colors'

const theme = createTheme()

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] | RecursivePartial<T[P]>
}

export const colors = formatColors({
  ...theme.colors,
  neutral: {
    white: theme.colors.black,
    10: 'rgba(255, 255, 255, 0.048)',
    20: 'rgba(255, 255, 255, 0.13)',
    30: 'rgba(255, 255, 255, 0.26)',
    40: 'rgba(255, 255, 255, 0.405)',
    50: 'rgba(255, 255, 255, 0.517)',
    60: 'rgba(255, 255, 255, 0.655)',
    70: 'rgba(255, 255, 255, 0.735)',
    80: 'rgba(255, 255, 255, 0.85)',
    black: theme.colors.white,
  },
})

export const darkTheme: RecursivePartial<WuiTheme> = {
  colors,
}
