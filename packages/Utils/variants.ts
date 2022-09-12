import { th } from '@xstyled/styled-components'

export type Variant = 'default' | 'error' | 'focused' | 'info' | 'success' | 'warning'

export const VARIANTS: Record<Variant, string> = {
  default: 'colors.dark.900',
  error: 'colors.danger.500',
  focused: 'colors.primary.200',
  info: 'colors.info.500',
  success: 'colors.success.500',
  warning: 'colors.warning.500',
}

export const getVariantColor = (variant: Variant): ReturnType<typeof th> => {
  const key = VARIANTS[variant]
  return key ? th(key) : null
}
