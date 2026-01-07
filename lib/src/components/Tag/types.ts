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
  | 'dark-blue'
  | 'dark-brand'
  | 'dark-green'
  | 'dark-orange'
  | 'dark-pink'
  | 'dark-red'
  | 'dark-teal'
  | 'dark-violet'
  | 'dark-warm'
  | 'dash'
  | 'green'
  | 'light-blue'
  | 'light-brand'
  | 'light-green'
  | 'light-orange'
  | 'light-pink'
  | 'light-red'
  | 'light-teal'
  | 'light-violet'
  | 'light-warm'
  | 'orange'
  | 'pink'
  | 'red'
  | 'teal'
  | 'violet'
  | 'warm'
