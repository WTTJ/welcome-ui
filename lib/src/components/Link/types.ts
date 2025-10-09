export interface LinkOptions {
  disabled?: boolean
  isExternal?: boolean
  multiline?: boolean
  size?: Size
  variant?: Variant
}

type Size = 'lg' | 'md' | 'sm' | 'xs'
type Variant = 'primary' | 'secondary'
