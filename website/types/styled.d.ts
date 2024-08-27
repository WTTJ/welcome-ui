/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import { WuiTheme } from '@welcome-ui/core'

declare module 'styled-components' {
  export interface DefaultTheme extends WuiTheme {}
}
