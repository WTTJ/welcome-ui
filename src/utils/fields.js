const TYPES = {
  InputCheckbox: 'checkbox',
  InputRadio: 'radio',
  RadioTab: 'radio',
  Toggle: 'checkbox'
}

export const getBaseType = type => TYPES[type] || type
