const TYPES: { [key: string]: string } = {
  Checkbox: 'checkbox',
  Radio: 'radio',
  InputText: 'text',
  RadioTab: 'radio',
  Select: 'text',
  Toggle: 'checkbox',
}

export const getBaseType = (type: string): string => TYPES[type] || type

type VariantProps = {
  error?: string | JSX.Element
  info?: string | JSX.Element
  success?: string | JSX.Element
  warning?: string | JSX.Element
}

export type VariantReturn = 'error' | 'warning' | 'success' | 'info'

export const getVariant = ({ error, info, success, warning }: VariantProps): VariantReturn => {
  if (error) return 'error'
  if (warning) return 'warning'
  if (success) return 'success'
  if (info) return 'info'
  return undefined
}

export const generateRandomId = (): string => `wui-field-${Math.random().toString(36).slice(2)}`

export const forwardedProps = ['disabled', 'required', 'variant']
