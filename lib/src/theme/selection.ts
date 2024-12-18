import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '.'

export type ThemeSelection = CSSObject

export const getSelection = (theme: ThemeValues): ThemeSelection => {
  return {
    backgroundColor: theme.colors['primary-40'],
    color: theme.colors['neutral-90'],
  }
}
