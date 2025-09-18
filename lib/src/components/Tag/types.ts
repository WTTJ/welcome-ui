import type { ComponentProps } from 'react'

export interface TagOptions {
  icon?: React.ReactNode
  onRemove?: () => void
  removeButtonProps?: ComponentProps<'button'>
  size?: TagSize
  variant?: TagVariant
}

export type TagSize = 'md' | 'sm' | 'xs'
export type TagVariant =
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
