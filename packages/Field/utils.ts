const TYPES: { [key: string]: string } = {
  Checkbox: 'checkbox',
  Radio: 'radio',
  InputText: 'text',
  RadioTab: 'radio',
  Select: 'text',
  Toggle: 'checkbox',
}

const isPristine = (connected: boolean, touched: boolean) => connected && !touched

export const getBaseType = (type: string): string => TYPES[type] || type

type VariantProps = {
  connected: boolean
  error: string
  isCheckbox: boolean
  isRadio: boolean
  modified: boolean
  touched: boolean
  warning: string
}

export type VariantReturn = 'error' | 'warning' | undefined

export const getVariant = ({
  connected,
  error,
  isCheckbox,
  isRadio,
  modified,
  touched,
  warning,
}: VariantProps): VariantReturn => {
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
