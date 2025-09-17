export interface InputTextOptions {
  icon?: JSX.Element
  iconPlacement?: 'left' | 'right'
  isClearable?: boolean
  size?: Size
  transparent?: boolean
  variant?: Variant
}

export type InputTextProps = InputTextOptions &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

export type Size = 'lg' | 'md' | 'sm' | 'xs'

export type Variant = 'danger' | 'default' | 'success' | 'warning'
