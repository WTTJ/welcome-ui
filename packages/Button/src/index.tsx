import React from 'react'
import { Button as ReakitButton } from 'reakit'
import {
  CreateWuiPandaProps,
  CreateWuiProps,
  forwardRef,
  forwardRefPanda,
} from '@welcome-ui/system'
import { styled } from '@welcome-ui/panda/jsx'

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
export const buttonStyles = S.buttonStyles

export type ButtonPandaOptions = S.ButtonPandaVariants
export type ButtonPandaProps = CreateWuiPandaProps<'button', ButtonPandaOptions>

export const ButtonPanda = forwardRefPanda<'button', ButtonPandaProps>(
  ({ as = ReakitButton, children, ...rest }, ref) => {
    const Component = styled(as, buttonStyles)

    return (
      <Component ref={ref} {...rest}>
        {children}
      </Component>
    )
  }
)
