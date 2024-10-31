import { th } from '@xstyled/styled-components'

export type Variant = 'danger' | 'info' | 'success' | 'warning'

export const VARIANTS: Record<Variant, string> = {
  danger: 'colors.red-70',
  info: 'colors.blue-70',
  success: 'colors.green-70',
  warning: 'colors.orange-70',
}

export const getVariantColor = (variant: Variant): ReturnType<typeof th> => {
  const key = VARIANTS[variant]
  return key ? th(key) : null
}
