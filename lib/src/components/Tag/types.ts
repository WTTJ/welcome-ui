import type { ButtonProps } from '@/components/Button/types'

export interface TagOptions {
  ai?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  onRemove?: () => void
  removeButtonProps?: ButtonProps
  size?: TagSize
  variant?: TagVariant
}

type TagSize = 'lg' | 'md'
type TagVariant =
  | 'blue'
  | 'brand'
  | 'dash'
  | 'green'
  | 'orange'
  | 'pink'
  | 'red'
  | 'teal'
  | 'violet'
  | 'warm'
