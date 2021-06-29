import { th } from '@xstyled/system'

export const VARIANTS = {
  error: 'colors.danger.700',
  focused: 'colors.primary.500',
  info: 'colors.info.700',
  success: 'colors.success.700',
  warning: 'colors.warning.700'
}

export const getVariantColor = variant => {
  const key = VARIANTS[variant]
  return key ? th(key) : null
}
