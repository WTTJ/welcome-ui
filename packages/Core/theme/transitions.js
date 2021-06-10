export const timingFunction = {
  primary: 'ease',
  secondary: 'linear',
  tertiary: 'cubic-bezier(0.41, 0.094, 0.54, 0.07)'
}

export const transitions = {
  slow: `500ms ${timingFunction.tertiary}`,
  medium: `300ms ${timingFunction.primary}`,
  fast: `100ms ${timingFunction.secondary}`
}
