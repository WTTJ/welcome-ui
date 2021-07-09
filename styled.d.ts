/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import '@xstyled/system'

import { WuiTheme } from './packages/Core/theme/types'

declare module '@xstyled/system' {
  export interface Theme extends WuiTheme {}
}

// todo add custom keys like colors, radii...
/* we need to override values if keys are already exist in DefaultTheme of styled-components */
declare module 'styled-components' {
  export interface DefaultTheme extends WuiTheme {}
}
