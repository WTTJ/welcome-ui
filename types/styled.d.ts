/* eslint-disable @typescript-eslint/no-empty-interface */
import 'jsx-to-styled'
import 'styled-components'
import type { WuiTheme } from '@welcome-ui/core'

declare module 'jsx-to-styled' {
  export interface Theme extends WuiTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends WuiTheme {}
}
