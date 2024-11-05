import React, { Children, cloneElement } from 'react'
import { Box } from '@welcome-ui/box'
import { CloseButton } from '@welcome-ui/close-button'
import { Button, ButtonProps } from '@welcome-ui/button'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { VariantIcon } from '@welcome-ui/variant-icon'

import * as S from './styles'
import { Title } from './Title'

export type Size = 'sm' | 'md'
export type Variant = 'danger' | 'success' | 'warning' | 'info' | 'default' | 'beige'
export interface AlertOptions {
  closeButtonDataTestId?: string
  cta?: JSX.Element
  /**
   * @description add a close button with an onclick handleClose function
   */
  handleClose?: () => void
  icon?: JSX.Element | null
  isFullWidth?: boolean
  size?: Size
  variant?: Variant
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
    const defaultVariantIcon = variant === 'beige' ? 'default' : variant

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
            size="xs"
            top="sm"
          />
        )}
        <VariantIcon
          alignSelf="flex-start"
          icon={icon}
          pr="md"
          pt={1}
          size="sm"
          variant={defaultVariantIcon}
        />
        <Box flex="1">
          {cta ? (
            <Box
              alignItems={{ md: 'center' }}
              display="flex"
              flexDirection={{ _: 'column', md: 'row' }}
              gap="md"
              justifyContent="space-between"
            >
              <div>{content}</div>
              {cta}
            </Box>
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
  <Button flexShrink={0} ref={ref} size="sm" variant="secondary" w="fit-content" {...props} />
))

export const Alert = Object.assign(AlertComponent, { Title, Button: AlertButton })
