import 'styled-components'
import '@xstyled/system'
import type { ThemeValues } from 'welcome-ui/theme'

declare module '@xstyled/system' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends ThemeValues {}
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeValues {}
}
