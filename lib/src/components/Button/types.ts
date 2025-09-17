import type { ButtonProps as AriakitButtonProps } from '@ariakit/react'

import type { MergeProps } from '@/utils/forwardRefWithAs'

export type ButtonProps = MergeProps<ButtonOptions, AriakitButtonProps>

export type ButtonShape = 'circle' | 'default' | 'square'
export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs'
export type ButtonVariant =
  | 'ghost'
  | 'ghost-ai'
  | 'ghost-danger'
  | 'primary'
  | 'primary-ai'
  | 'primary-danger'
  | 'secondary'
  | 'tertiary'
  | 'tertiary-ai'
  | 'tertiary-danger'
interface ButtonOptions {
  isLoading?: boolean
  shape?: ButtonShape
  size?: ButtonSize
  variant?: ButtonVariant
}
