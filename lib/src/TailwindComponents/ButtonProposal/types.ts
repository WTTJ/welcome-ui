import type { ButtonProps as AriakitButtonProps } from '@ariakit/react'
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'

import type { PolymorphicProps } from '../../TailwindTheme/types'
import type { Variant } from '../Button/tokens'

export type ButtonProps<T extends React.ElementType> = AriakitButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  PolymorphicProps<T> & {
    children?: ReactNode
    className?: string
    ref?: React.Ref<HTMLButtonElement>
    shape?: 'circle' | 'default' | 'square'
    size?: 'lg' | 'md' | 'sm' | 'xs'
    style?: CSSProperties
    variant?: Variant
  }
export type ButtonShape = 'circle' | 'default' | 'square'

export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs'

export type ButtonVariant =
  | 'ghost'
  | 'ghost-danger'
  | 'primary'
  | 'primary-danger'
  | 'secondary'
  | 'tertiary'
  | 'tertiary-danger'
