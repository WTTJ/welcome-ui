import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { Button as AriakitButton } from '@ariakit/react'
import { type HTMLStyledProps, styled } from '@welcome-ui/panda/jsx'
import { button, type ButtonVariantProps } from '@welcome-ui/panda/recipes'

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

export type ButtonPandaOptions = ButtonVariantProps
export type ButtonPandaProps = HTMLStyledProps<'button'> & ButtonPandaOptions

const StyledButtonPanda = styled(AriakitButton, button)

export const ButtonPanda = React.forwardRef<HTMLButtonElement, ButtonPandaProps>(
  ({ children, ...rest }, ref) => {
    return (
      <StyledButtonPanda ref={ref} {...rest}>
        {children}
      </StyledButtonPanda>
    )
  }
)
