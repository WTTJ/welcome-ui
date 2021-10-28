export type ThemeTimingFunction = {
  primary: string
  secondary: string
  tertiary: string
}

export const timingFunction: ThemeTimingFunction = {
  primary: 'ease',
  secondary: 'linear',
  tertiary: 'cubic-bezier(0.41, 0.094, 0.54, 0.07)',
}

export type ThemeTransitions = {
  slow: string
  medium: string
  fast: string
}

export const transitions: ThemeTransitions = {
  slow: `500ms ${timingFunction.tertiary}`,
  medium: `300ms ${timingFunction.primary}`,
  fast: `100ms ${timingFunction.secondary}`,
}
