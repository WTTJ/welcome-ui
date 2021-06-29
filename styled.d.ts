/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import '@xstyled/system'

import { WuiTheme } from './packages/Core/theme/types'

declare module '@xstyled/system' {
  export interface Theme extends WuiTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends WuiTheme {}
}
