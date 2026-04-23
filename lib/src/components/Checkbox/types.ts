import type { ComponentProps } from 'react'

export interface CheckboxOptions {
  indeterminate?: boolean
  variant?: Variant
}

export type CheckboxProps = CheckboxOptions &
  Omit<ComponentProps<'input'>, 'onChange'> & {
    onChange?: (isChecked: boolean, e: React.MouseEvent<HTMLDivElement>) => void
  }

export type Variant = 'danger' | 'success' | 'warning'
