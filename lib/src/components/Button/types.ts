import type { ButtonProps as AriakitButtonProps } from '@ariakit/react'
import type { ReactNode } from 'react'

import type { PolymorphicProps } from '@/theme/types'

export type ButtonProps<T extends React.ElementType = 'button'> = AriakitButtonProps &
  ButtonOptions &
  PolymorphicProps<T>

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
  children?: ReactNode
  isLoading?: boolean
  shape?: ButtonShape
  size?: ButtonSize
  variant?: ButtonVariant
}
