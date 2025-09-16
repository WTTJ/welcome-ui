import type { ButtonProps as AriakitButtonProps } from '@ariakit/react'
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'

import type { PolymorphicProps } from '@/theme/types'

export type ButtonProps<T extends React.ElementType> = AriakitButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonOptions &
  PolymorphicProps<T> & {
    children?: ReactNode
    className?: string
    ref?: React.Ref<HTMLButtonElement>
    style?: CSSProperties
  }

interface ButtonOptions {
  children?: ReactNode
  isLoading?: boolean
  shape?: Shape
  size?: Size
  variant?: Variant
}
type Shape = 'circle' | 'default' | 'square'
type Size = 'lg' | 'md' | 'sm' | 'xs'
type Variant =
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
