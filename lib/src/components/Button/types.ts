import type { ButtonProps as AriakitButtonProps } from '@ariakit/react'
import type { ReactNode } from 'react'

import type { MergeProps } from '@/utils/forwardRefWithAs'

export type ButtonProps = MergeProps<ButtonOptions, AriakitButtonProps>

export type ButtonSize = 'lg' | 'md' | 'sm'
export type ButtonVariant =
  | 'primary'
  | 'primary-ai'
  | 'primary-danger'
  | 'primary-neutral'
  | 'secondary'
  | 'secondary-danger'
  | 'tertiary'
  | 'tertiary-danger'
interface ButtonOptions {
  children?: ReactNode
  isLoading?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}
