import { fontSizes } from './font-sizes'
import { fontWeights } from './font-weights'

export const letterSpacings = {
  sm: '0.5px',
  md: '1px',
  lg: '2px'
}

const defaults = {
  'font-family': 'inherit',
  'font-size': 'inherit',
  'font-weight': 'inherit',
  'text-transform': 'none',
  'letter-spacing': 'normal'
}

export const typography = {
  hint: {
    ...defaults,
    'font-size': fontSizes.sm,
    'font-weight': fontWeights.regular
  },
  label: {
    ...defaults,
    'font-size': fontSizes.sm,
    'font-weight': fontWeights.medium
  },
  input: {
    ...defaults,
    'font-size': fontSizes.sm,
    'font-weight': fontWeights.regular
  },
  badge: {
    ...defaults,
    'font-size': fontSizes.sm,
    'font-weight': fontWeights.bold
  },
  button: {
    ...defaults,
    'font-size': fontSizes.xs,
    'font-weight': fontWeights.bold,
    'text-transform': 'uppercase',
    'letter-spacing': letterSpacings.md
  }
}
