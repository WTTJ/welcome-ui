import React from 'react'

import * as S from './styles'
import { Size, Variant } from './theme'

import { Loader } from '@/Loader'
import { CreateWuiProps, forwardRef } from '@/System'
import { Box } from '@/Box'

export interface ButtonOptions {
  /** AI button with 3 variants: primary / tertiary / ghost */
  ai?: boolean
  /**
   * Danger button with 3 variants: primary / tertiary / ghost
   * Take precedence hover the AI prop
   */
  danger?: boolean
  disabled?: boolean
  isLoading?: boolean
  shape?: 'circle' | 'square'
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
      ai,
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
        ai={ai}
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
