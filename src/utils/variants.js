import { get } from '../theme/helpers'

export const getVariant = (warning, error) => {
  if (error) return 'error'
  if (warning) return 'warning'
  return undefined
}

const variantColors = {
  error: 'colors.danger.500',
  warning: 'colors.warning.500',
  info: 'colors.info.500'
}

export const getVariantColor = variant => {
  const variantColor = variantColors[variant]
  return variantColor ? get(variantColor) : null
}
