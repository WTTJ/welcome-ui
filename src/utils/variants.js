import { get } from '../theme/helpers'

export const getVariant = (warning, error) => {
  if (error) return 'error'
  if (warning) return 'warning'
  return undefined
}

const variantColors = {
  error: ['danger', 'default'],
  warning: ['warning', 'default'],
  info: ['info', 'default'],
  default: ['nude', 'default']
}

export const getVariantColor = variant => {
  const variantColor = variantColors[variant] || variantColors.default
  return get('color', ...variantColor)
}
