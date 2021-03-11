export const timingFunctions = {
  primary: 'ease',
  secondary: 'linear',
  tertiary: 'cubic-bezier(0.41, 0.094, 0.54, 0.07)'
}

export const transitions = {
  slow: `500ms ${timingFunctions.tertiary}`,
  medium: `300ms ${timingFunctions.primary}`,
  fast: `100ms ${timingFunctions.secondary}`
}
