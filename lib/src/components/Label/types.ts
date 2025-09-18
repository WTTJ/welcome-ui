import type { ComponentPropsWithRef } from 'react'

export type LabelProps = ComponentPropsWithRef<'label'> & LabelOptions

interface LabelOptions {
  children: React.ReactNode
  disabled?: boolean
  required?: boolean
  variant?: 'danger' | 'success' | 'warning'
}
