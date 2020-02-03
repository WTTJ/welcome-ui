import { th } from '@xstyled/system'

export const VARIANTS = {
  error: 'colors.danger.500',
  focused: 'colors.primary.500',
  info: 'colors.info.500',
  success: 'colors.success.500',
  warning: 'colors.warning.500'
}

export const getVariantColor = variant => {
  const key = VARIANTS[variant]
  return key ? th(key) : null
}
