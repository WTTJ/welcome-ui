import { th } from '@xstyled/styled-components'

export type Variant = 'error' | 'focused' | 'info' | 'success' | 'warning'

export const VARIANTS: Record<Variant, string> = {
  error: 'colors.danger.700',
  focused: 'colors.primary.500',
  info: 'colors.info.700',
  success: 'colors.success.700',
  warning: 'colors.warning.700',
}

export const getVariantColor = (variant: Variant): ReturnType<typeof th> => {
  const key = VARIANTS[variant]
  return key ? th(key) : null
}
