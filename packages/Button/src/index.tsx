import React from 'react'
import { CreateWuiProps, forwardRef, forwardRefPanda } from '@welcome-ui/system'

import * as S from './styles'

export type Shape = 'circle' | 'square'
export type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
export type Variant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'primary-info'
  | 'secondary-info'
  | 'primary-success'
  | 'secondary-success'
  | 'ghost'
  | 'primary-warning'
  | 'secondary-warning'
  | 'primary-danger'
  | 'secondary-danger'
  | 'disabled'

export interface ButtonOptions {
  disabled?: boolean
  size?: Size
  variant?: Variant
  shape?: Shape
}

export type ButtonProps = CreateWuiProps<'button', ButtonOptions>

/**
 * @tag button
 */
export const Button = forwardRef<'button', ButtonProps>(
  ({ children, dataTestId, disabled, size = 'md', variant = 'primary', ...rest }, ref) => (
    <S.Button
      data-testid={dataTestId}
      disabled={disabled}
      ref={ref}
      size={size}
      variant={disabled ? 'disabled' : variant}
      {...rest}
    >
      {children}
    </S.Button>
  )
)

Button.displayName = 'Button'

export const StyledButton = S.Button

type PandaVariant = Exclude<Variant, 'disabled'>
type ButtonPandaOptions = Omit<ButtonOptions, 'variant'> & {
  variant: PandaVariant
  children: React.ReactNode
}

export const ButtonPanda = forwardRefPanda<'button', ButtonPandaOptions>(
  ({ children, disabled, shape, size = 'md', variant = 'primary', ...rest }, ref) => (
    <S.ButtonPanda
      data-shape={shape}
      disabled={disabled}
      ref={ref}
      shape={shape}
      size={size}
      variant={variant}
      {...rest}
    >
      {children}
    </S.ButtonPanda>
  )
)
