import type { ButtonProps as AriakitButtonProps } from '@ariakit/react'
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'

export type ButtonProps = AriakitButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode
    className?: string
    ref?: React.Ref<HTMLButtonElement>
    shape?: ButtonShape
    size?: ButtonSize
    style?: CSSProperties
    variant?: ButtonVariant
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
