import { css } from '@xstyled/styled-components'

import { WuiTheme } from '../theme/types'

export const workSans =
  () =>
  ({ theme }: { theme: WuiTheme }): ReturnType<typeof css> =>
    css`
      @font-face {
        font-family: 'Work Sans';
        src: ${`url(${theme.fontsUrl}/fonts/work-sans-variable.woff2')`} format('woff2-variations');
        font-weight: 400 500 600;
        font-stretch: 75% 125%;
        font-style: oblique 0deg 20deg;
      }
    `
