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
  warning?: string | JSX.Element
  success?: string | JSX.Element
}

export type VariantReturn = 'error' | 'warning' | 'success'

export const getVariant = ({ error, success, warning }: VariantProps): VariantReturn => {
  if (error) return 'error'
  if (warning) return 'warning'
  if (success) return 'success'
  return undefined
}

export const generateRandomId = (): string => `wui-field-${Math.random().toString(36).slice(2)}`

export const forwardedProps = ['disabled', 'required', 'variant']
