import { Variant } from '@welcome-ui/utils'

import { VariantProps } from '.'

const TYPES: { [key: string]: string } = {
  Checkbox: 'checkbox',
  Radio: 'radio',
  InputText: 'text',
  RadioTab: 'radio',
  Select: 'text',
  Toggle: 'checkbox',
}

export const getBaseType = (type: string): string => TYPES[type] || type

export const getVariant = ({ error, info, success, warning }: VariantProps): Variant => {
  if (error) return 'danger'
  if (warning) return 'warning'
  if (success) return 'success'
  if (info) return 'info'
  return undefined
}

export const generateRandomId = (): string => `wui-field-${Math.random().toString(36).slice(2)}`

export const forwardedProps = ['disabled', 'required', 'variant']
