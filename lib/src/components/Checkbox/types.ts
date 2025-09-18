export interface CheckboxOptions {
  indeterminate?: boolean
  variant?: Variant
}

export type CheckboxProps = CheckboxOptions & React.InputHTMLAttributes<HTMLInputElement>

export type Variant = 'danger' | 'default' | 'success' | 'warning'
