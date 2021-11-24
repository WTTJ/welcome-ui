import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { ButtonOptions, StyledButton } from '@welcome-ui/button'

export type ButtonLinkProps = CreateWuiProps<'a', ButtonOptions>

export const ButtonLink = forwardRef<'a', ButtonLinkProps>(
  ({ children, dataTestId, disabled, size = 'md', variant = 'primary', ...rest }, ref) => (
    <StyledButton
      as="a"
      data-testid={dataTestId}
      disabled={disabled}
      ref={ref}
      size={size}
      variant={disabled ? 'disabled' : variant}
      {...rest}
    >
      {children}
    </StyledButton>
  )
)

ButtonLink.displayName = 'ButtonLink'
