import { blueBright } from 'ansi-colors'

import { get } from '../theme/helpers'
import { colors } from '../theme/colors'

export const getVariant = (warning, error) => {
  if (error) return 'error'
  if (warning) return 'warning'
  return undefined
}

const variantStateColors = {
  error: 'colors.danger.500',
  warning: 'colors.warning.500',
  info: 'colors.info.500'
}

export const getVariantStateColor = variant => {
  const variantColor = variantStateColors[variant]
  return variantColor ? get(variantColor) : null
}

const variantColors = {
  blue: 'colors.sub.blue',
  default: 'colors.nude.300',
  green: 'colors.sub.green',
  orange: 'colors.sub.orange',
  pink: 'colors.sub.pink',
  primary: 'colors.primary.500',
  purple: 'colors.sub.purple',
  red: 'colors.sub.red',
  secondary: 'colors.secondary.500',
  turquoize: 'colors.sub.turquoize',
  yellow: 'colors.sub.yellow',
  ...variantStateColors
}

export const getVariantColor = variant => {
  const variantColor = variantColors[variant]
  return variantColor ? get(variantColor) : null
}
