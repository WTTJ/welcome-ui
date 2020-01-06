const TYPES = {
  Checkbox: 'checkbox',
  Radio: 'radio',
  InputText: 'text',
  RadioTab: 'radio',
  Select: 'text',
  Toggle: 'checkbox'
}

export const getBaseType = type => TYPES[type] || type

export const getVariant = ({ error, warning }) => {
  if (error) {
    return 'error'
  }
  if (warning) {
    return 'warning'
  }
  return undefined
}
