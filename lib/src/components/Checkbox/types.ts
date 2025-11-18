import type { ComponentProps } from 'react'

export interface CheckboxOptions {
  indeterminate?: boolean
  variant?: Variant
}

export type CheckboxProps = CheckboxOptions &
  Omit<ComponentProps<'input'>, 'onChange'> & {
    onChange?: (isChecked: boolean) => void
  }

export type Variant = 'danger' | 'success' | 'warning'
