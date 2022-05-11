import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { Loader } from '@welcome-ui/loader'

import * as S from './styles'

export type Shape = 'circle' | 'square'
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Variant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'primary-info'
  | 'secondary-info'
  | 'primary-success'
  | 'secondary-success'
  | 'tertiary-negative'
  | 'quaternary'
  | 'primary-warning'
  | 'secondary-warning'
  | 'primary-danger'
  | 'secondary-danger'
  | 'disabled'

export interface ButtonOptions {
  disabled?: boolean
  isLoading?: boolean
  size?: Size
  variant?: Variant
  shape?: Shape
}

export type ButtonProps = CreateWuiProps<'button', ButtonOptions>

/**
 * @tag button
 */
export const Button = forwardRef<'button', ButtonProps>(
  (
    { children, dataTestId, disabled, isLoading, size = 'md', variant = 'primary', ...rest },
    ref
  ) => (
    <S.Button
      data-testid={dataTestId}
      disabled={disabled}
      isLoading={isLoading}
      ref={ref}
      size={size}
      variant={disabled ? 'disabled' : variant}
      {...rest}
    >
      <S.ButtonContent opacity={isLoading ? 0 : 1}>{children}</S.ButtonContent>
      {isLoading && (
        <Loader
          alignItems="center"
          display="flex"
          h="100%"
          justifyContent="center"
          left={0}
          position="absolute"
          top={0}
          w="100%"
        />
      )}
    </S.Button>
  )
)

Button.displayName = 'Button'

export const StyledButton = S.Button
