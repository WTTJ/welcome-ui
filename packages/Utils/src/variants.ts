import { th } from '@xstyled/styled-components'

export type Variant = 'error' | 'focused' | 'info' | 'success' | 'warning'

export const VARIANTS: Record<Variant, string> = {
  error: 'colors.danger-40',
  focused: 'colors.primary-30',
  info: 'colors.information-50',
  success: 'colors.success-40',
  warning: 'colors.warning-40',
}

export const getVariantColor = (variant: Variant): ReturnType<typeof th> => {
  const key = VARIANTS[variant]
  return key ? th(key) : null
}
