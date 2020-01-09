const TYPES = {
  Checkbox: 'checkbox',
  Radio: 'radio',
  InputText: 'text',
  RadioTab: 'radio',
  Select: 'text',
  Toggle: 'checkbox'
}

export const getBaseType = (type: string): string => TYPES[type] || type

export const VARIANTS = ['error', 'warning'] as const

export const getVariant = ({ error, warning }): typeof VARIANTS[number] => {
  if (error) {
    return 'error'
  }
  if (warning) {
    return 'warning'
  }
  return undefined
}
