import { DefaultTheme } from 'styled-components'

export type Variant = 'error' | 'focused' | 'info' | 'success' | 'warning'

export const VARIANTS: Record<Variant, keyof DefaultTheme['colors']> = {
  error: 'danger-400',
  focused: 'primary-200',
  info: 'info-500',
  success: 'success-400',
  warning: 'warning-400',
}

export const getVariantColor =
  (variant: Variant) =>
  ({ theme }: Record<string, unknown> & { theme: DefaultTheme }) => {
    const key = VARIANTS[variant]
    return key ? theme.colors?.[key] : null
  }
