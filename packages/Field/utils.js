const TYPES = {
  Checkbox: 'checkbox',
  Radio: 'radio',
  InputText: 'text',
  RadioTab: 'radio',
  Select: 'text',
  Toggle: 'checkbox',
}

const isPristine = (connected, touched) => connected && !touched

export const getBaseType = type => TYPES[type] || type

export const getVariant = ({
  connected,
  error,
  isCheckbox,
  isRadio,
  modified,
  touched,
  warning,
}) => {
  if (
    ((isCheckbox || isRadio) && isPristine(connected, modified)) ||
    (!isCheckbox && !isRadio && isPristine(connected, touched))
  ) {
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
