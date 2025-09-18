import type { ComponentProps } from 'react'

export interface CheckboxOptions {
  indeterminate?: boolean
  variant?: Variant
}

export type CheckboxProps = CheckboxOptions & ComponentProps<'input'>

export type Variant = 'danger' | 'success' | 'warning'
