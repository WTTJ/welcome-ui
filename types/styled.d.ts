import 'styled-components'
import '@xstyled/system'

import { ThemeValues } from 'welcome-ui/theme'

declare module '@xstyled/system' {
  export interface Theme extends ThemeValues {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeValues {}
}
