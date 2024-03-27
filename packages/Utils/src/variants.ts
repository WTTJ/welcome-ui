import { th } from '@wttj/xstyled-styled-components'

export type Variant = 'error' | 'focused' | 'info' | 'success' | 'warning'

export const VARIANTS: Record<Variant, string> = {
  error: 'colors.danger-400',
  focused: 'colors.primary-200',
  info: 'colors.info-500',
  success: 'colors.success-400',
  warning: 'colors.warning-400',
}

export const getVariantColor = (variant: Variant): ReturnType<typeof th> => {
  const key = VARIANTS[variant]
  return key ? th(key) : null
}
