import type { ButtonProps as AriakitButtonProps } from '@ariakit/react'
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'

import type { PolymorphicProps } from '../../theme/types'

export type ButtonProps<T extends React.ElementType> = AriakitButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  PolymorphicProps<T> & {
    children?: ReactNode
    className?: string
    isLoading?: boolean
    ref?: React.Ref<HTMLButtonElement>
    shape?: Shapes
    size?: Sizes
    style?: CSSProperties
    variant?: Variants
  }
type Shapes = 'circle' | 'default' | 'square'
type Sizes = 'lg' | 'md' | 'sm' | 'xs'

type Variants =
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
