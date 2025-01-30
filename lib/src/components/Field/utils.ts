import { FieldOptions } from '.'

const TYPES: { [key: string]: string } = {
  Checkbox: 'checkbox',
  Radio: 'radio',
  InputText: 'text',
  RadioTab: 'radio',
  Select: 'text',
  Toggle: 'checkbox',
}

export const getBaseType = (type: string): string => TYPES[type] || type

export const getVariant = ({
  error,
  success,
  warning,
}: Pick<FieldOptions, 'error' | 'success' | 'warning'>): 'danger' | 'warning' | 'success' => {
  if (error) return 'danger'
  if (warning) return 'warning'
  if (success) return 'success'
  return undefined
}

export const generateRandomId = (): string => `wui-field-${Math.random().toString(36).slice(2)}`

export const forwardedProps = ['disabled', 'required', 'variant']
