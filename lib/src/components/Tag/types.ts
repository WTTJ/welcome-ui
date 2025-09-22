import type { ButtonProps } from '@/components/Button/types'

export interface TagOptions {
  icon?: React.ReactNode
  onRemove?: () => void
  removeButtonProps?: ButtonProps
  size?: TagSize
  variant?: TagVariant
}

type TagSize = 'md' | 'sm' | 'xs'
type TagVariant =
  | 'ai'
  | 'blue'
  | 'danger'
  | 'default'
  | 'default'
  | 'green'
  | 'info'
  | 'orange'
  | 'pink'
  | 'primary'
  | 'success'
  | 'teal'
  | 'violet'
  | 'warning'
