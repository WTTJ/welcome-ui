export type ButtonProps = {
  className?: string
  shape?: ButtonShape
  size?: ButtonSize
  variant?: ButtonVariant
}

export type ButtonShape = 'circle' | 'square'

export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs'

export type ButtonVariant =
  | 'ghost'
  | 'ghost-danger'
  | 'primary'
  | 'primary-danger'
  | 'secondary'
  | 'tertiary'
  | 'tertiary-danger'
