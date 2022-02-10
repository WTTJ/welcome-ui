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
}

export type VariantReturn = 'error' | 'warning'

export const getVariant = ({ error, warning }: VariantProps): VariantReturn => {
  if (error) return 'error'
  if (warning) return 'warning'
  return undefined
}

export const generateRandomId = (): string => `wui-field-${Math.random().toString(36).slice(2)}`

export const forwardedProps = ['disabled', 'required', 'variant']
