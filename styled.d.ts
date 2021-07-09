/* eslint-disable @typescript-eslint/no-empty-interface */
// import original module declarations
import 'styled-components'
import '@xstyled/system'
import { DefaultTheme as XStyledDefaultTheme } from '@xstyled/styled-components'

interface AppTheme extends Omit<XStyledDefaultTheme, 'colors'> {
  /* Customize your theme */
  toRem: (int: number) => string
}

// and extend them!
declare module '@xstyled/system' {
  export interface Theme extends AppTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
