const TYPES = {
  InputCheckbox: 'checkbox',
  InputRadio: 'radio',
  InputText: 'text',
  RadioTab: 'radio',
  Select: 'text',
  Toggle: 'checkbox'
}

export const getBaseType = type => TYPES[type] || type
