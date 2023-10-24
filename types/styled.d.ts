/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import '@xstyled/styled-components'

import { WuiTheme } from '@welcome-ui/core'
import { SystemStyleObject as SystemStyleObjectWithTypes } from '@welcome-ui/panda'

declare module '@xstyled/styled-components' {
  export interface Theme extends WuiTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends WuiTheme {}
}

// useful to types defineRecipe from @pandacss/dev
declare module '@pandacss/dev' {
  export interface SystemStyleObject extends SystemStyleObjectWithTypes {}
}
