/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import '@xstyled/styled-components'
import { WuiTheme } from '@welcome-ui/core'

declare module '@xstyled/styled-components' {
  export interface Theme extends WuiTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends WuiTheme {}
}
