import { CSSObject } from '@xstyled/styled-components'

export type ThemeTimingFunction = {
  primary: CSSObject['transition-timing-function']
  secondary: CSSObject['transition-timing-function']
  tertiary: CSSObject['transition-timing-function']
}

export const timingFunction: ThemeTimingFunction = {
  primary: 'ease',
  secondary: 'linear',
  tertiary: 'cubic-bezier(0.41, 0.094, 0.54, 0.07)',
}

export type ThemeTransitions = {
  slow: CSSObject['transition']
  medium: CSSObject['transition']
  fast: CSSObject['transition']
}

export const transitions: ThemeTransitions = {
  slow: `500ms ${timingFunction.tertiary}`,
  medium: `300ms ${timingFunction.primary}`,
  fast: `100ms ${timingFunction.secondary}`,
}
