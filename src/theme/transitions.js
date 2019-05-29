export const transitionCurves = {
  primary: 'ease',
  secondary: 'linear',
  tertiary: 'cubic-bezier(0.41, 0.094, 0.54, 0.07)'
}

export const transitions = {
  slow: `500ms ${transitionCurves.tertiary}`,
  medium: `300ms ${transitionCurves.primary}`,
  fast: `100ms ${transitionCurves.secondary}`
}
