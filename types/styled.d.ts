/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import '@wttj/xstyled-styled-components'

import { WuiTheme } from '@welcome-ui/core'

declare module '@wttj/xstyled-styled-components' {
  export interface Theme extends WuiTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends WuiTheme {}
}
