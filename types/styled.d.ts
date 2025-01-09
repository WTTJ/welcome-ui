/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import '@xstyled/styled-components'

import { ThemeValues } from 'welcome-ui'

declare module '@xstyled/styled-components' {
  export interface Theme extends ThemeValues {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeValues {}
}
