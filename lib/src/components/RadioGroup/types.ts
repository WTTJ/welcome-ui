import type { HTMLAttributes } from 'react'

import type { FieldGroupOptions } from '@old/FieldGroup'

export type RadioGroupOption = {
  hint?: string
  label: number | string
  value: number | string
}

export interface RadioGroupOptions {
  dataTestId?: string
  disabled?: boolean
  name: string
  onChange?: (value: RadioGroupOption['value']) => void
  options: RadioGroupOption[]
  renderOption?: React.ElementType
  value?: string
}

export type RadioGroupProps = FieldGroupOptions &
  HTMLAttributes<HTMLFieldSetElement> &
  RadioGroupOptions &
  RadioGroupOptions
