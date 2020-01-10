const TYPES = {
  Checkbox: 'checkbox',
  Radio: 'radio',
  InputText: 'text',
  RadioTab: 'radio',
  Select: 'text',
  Toggle: 'checkbox'
}

export const getBaseType = type => TYPES[type] || type

const isPristine = (connected, touched) => connected && !touched

export const getVariant = ({ connected, error, touched, warning }) => {
  if (isPristine(connected, touched)) {
    return undefined
  }
  if (error) {
    return 'error'
  }
  if (warning) {
    return 'warning'
  }

  return undefined
}
