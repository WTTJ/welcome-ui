import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { Box } from '@welcome-ui/box'
import { Loader } from '@welcome-ui/loader'

import * as S from './styles'

export type Shape = 'circle' | 'square'
export type Size = 'xs' | 'sm' | 'md' | 'lg'
export type Variant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'disabled'

export interface ButtonOptions {
  /** Danger button with 3 variants: primary / tertiary / ghost */
  danger?: boolean
  disabled?: boolean
  isLoading?: boolean
  shape?: Shape
  size?: Size
  variant?: Variant
}

export type ButtonProps = CreateWuiProps<'button', ButtonOptions>

/**
 * @tag button
 */
export const Button = forwardRef<'button', ButtonProps>(
  (
    {
      children,
      danger,
      dataTestId,
      disabled,
      isLoading,
      size = 'md',
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading

    return (
      <S.Button
        danger={danger}
        data-loading={isLoading}
        data-testid={dataTestId}
        disabled={isDisabled}
        ref={ref}
        size={size}
        variant={isDisabled ? 'disabled' : variant}
        {...rest}
      >
        {isLoading && (
          <div>
            <Box
              alignItems="center"
              bottom={0}
              display="flex"
              justifyContent="center"
              left={0}
              m={0}
              position="absolute"
              right={0}
              top={0}
            >
              <Loader size="xs" />
            </Box>
            <Box opacity="0">{children}</Box>
          </div>
        )}
        {!isLoading && children}
      </S.Button>
    )
  }
)

Button.displayName = 'Button'

export const StyledButton = S.Button
