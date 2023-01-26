/* eslint-disable react/no-multi-comp */
import React, { Children, cloneElement } from 'react'
import { Stack } from '@welcome-ui/stack'
import { Box } from '@welcome-ui/box'
import { CloseButton } from '@welcome-ui/close-button'
import { Button, ButtonProps } from '@welcome-ui/button'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { Variant, VariantIcon } from '@welcome-ui/variant-icon'

import * as S from './styles'
import { Title } from './Title'

export type Size = 'sm' | 'md'
export interface AlertOptions {
  variant?: Variant
  size?: Size
  icon?: JSX.Element
  isFullWidth?: boolean
  closeButtonDataTestId?: string
  cta?: JSX.Element
  /**
   * @description add a close button with an onclick handleClose function
   */
  handleClose?: () => void
}

export type AlertProps = CreateWuiProps<'div', AlertOptions>

const AlertComponent = forwardRef<'div', AlertProps>(
  (
    {
      children,
      cta,
      dataTestId,
      handleClose,
      icon,
      isFullWidth,
      size = 'sm',
      variant = 'default',
      ...rest
    },
    ref
  ) => {
    const closeButtonDataTestId = dataTestId ? `${dataTestId}-close-button` : undefined

    const content = Children.toArray(children).map((child: React.ReactElement) => {
      // Add variant to Title to show the correct icon
      if (child.type === Title) {
        return cloneElement(child, { variant })
      }
      return child
    })

    return (
      <S.Alert
        data-testid={dataTestId}
        isFullWidth={isFullWidth}
        ref={ref}
        size={size}
        variant={variant}
        {...rest}
      >
        {!!handleClose && (
          <CloseButton
            dataTestId={closeButtonDataTestId}
            onClick={handleClose}
            position="absolute"
            right="sm"
            top="sm"
          />
        )}
        <VariantIcon icon={icon} pr="md" variant={variant} />
        <Box flex="1">
          {cta ? (
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <div>{content}</div>
              {cta}
            </Stack>
          ) : (
            content
          )}
        </Box>
      </S.Alert>
    )
  }
)

// We need this component to check its existence in <Alert> and to allow users to add Button in <Alert> content
const AlertButton = forwardRef<'button', ButtonProps>((props, ref) => (
  <Button ref={ref} size="sm" {...props} />
))

export const Alert = Object.assign(AlertComponent, { Title, Button: AlertButton })
