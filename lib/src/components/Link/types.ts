export interface LinkOptions {
  disabled?: boolean
  isExternal?: boolean
  multiline?: boolean
  variant?: Variant
}

type Variant = 'primary' | 'secondary'
