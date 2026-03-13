import type { ComponentPropsWithRef } from 'react'

export type LabelProps = ComponentPropsWithRef<'label'> & LabelOptions

interface LabelOptions {
  disabled?: boolean
  required?: boolean
  variant?: 'danger' | 'success' | 'warning'
}
