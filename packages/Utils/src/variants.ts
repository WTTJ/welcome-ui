import { th } from '@xstyled/styled-components'

export type Variant = 'danger' | 'info' | 'success' | 'warning'

export const VARIANTS: Record<Variant, string> = {
  danger: 'colors.danger-40',
  info: 'colors.info-40',
  success: 'colors.success-40',
  warning: 'colors.warning-40',
}

export const getVariantColor = (variant: Variant): ReturnType<typeof th> => {
  const key = VARIANTS[variant]
  return key ? th(key) : null
}
