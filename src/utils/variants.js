import { get } from '../theme/helpers'

export const getVariant = (warning, error) => {
  if (error) return 'error'
  if (warning) return 'warning'
  return undefined
}

const variantColors = {
  error: ['danger', 500],
  warning: ['warning', 500],
  info: ['info', 500]
}

export const getVariantColor = variant => {
  const variantColor = variantColors[variant]
  return variantColor ? get(`colors.${variantColor.join('.')}`) : null
}
