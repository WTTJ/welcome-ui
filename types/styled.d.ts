/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import '@xstyled/system'

import type { WuiTheme } from '@welcome-ui/core'

declare module '@xstyled/system' {
  export interface ITheme extends WuiTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends WuiTheme {}
}
