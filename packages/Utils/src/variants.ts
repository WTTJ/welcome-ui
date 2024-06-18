import { th } from '@xstyled/styled-components'

export type Variant = 'error' | 'focused' | 'info' | 'success' | 'warning'

export const VARIANTS: Record<Variant, string> = {
  error: 'colors.danger-50',
  focused: 'colors.primary-50',
  info: 'colors.info-50',
  success: 'colors.success-50',
  warning: 'colors.warning-50',
}

export const getVariantColor = (variant: Variant): ReturnType<typeof th> => {
  const key = VARIANTS[variant]
  return key ? th(key) : null
}
