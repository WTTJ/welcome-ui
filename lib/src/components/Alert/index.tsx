import React, { Children, cloneElement } from 'react'

import { Box } from '@/Box'
import type { ButtonProps } from '@/Button'
import { Button } from '@/Button'
import { CloseButton } from '@/CloseButton'
import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import * as S from './styles'
import type { Size, Variant } from './theme'
import { Title } from './Title'

export interface AlertOptions {
  closeButtonDataTestId?: string
  cta?: React.ReactElement
  /**
   * @description add a close button with an onclick handleClose function
   */
  handleClose?: () => void
  icon?: null | React.ReactElement
  isFullWidth?: boolean
  size?: Size
  variant?: Variant
}

export type AlertProps = CreateWuiProps<'div', AlertOptions>

type CloneActionsReturns = React.ReactElement<
  unknown,
  React.JSXElementConstructor<AlertProps> | string
>

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
    const withAiButton = variant === 'ai'

    const content = Children.toArray(children).map(
      (child: React.ReactElement<{ hasCloseButton: boolean; variant: Size }>) => {
        if (child.type === Title)
          return cloneElement(child, { hasCloseButton: !!handleClose, variant: size })

        return child
      }
    )

    // Handle clone actions recursively in case of multiple buttons
    const cloneActions = (
      child: React.ReactElement<{ children?: React.ReactNode }>
    ): CloneActionsReturns => {
      if (child) {
        if (child.type === AlertButton) {
          // If Alert variant is ai, we override the CTA Buttons to use the AI sub-variants
          return cloneElement<ButtonProps>(child, {
            ai: withAiButton,
            size,
            variant: withAiButton ? 'primary' : undefined,
          })
        }
        if (child.type === AlertSecondaryButton) {
          return cloneElement<ButtonProps>(child, {
            ai: withAiButton,
            size,
          })
        }

        if (child.props?.children) {
          return cloneElement(child, {
            ...child.props,
            children: Children.map(child.props.children, (nestedChild: React.ReactElement) =>
              cloneActions(nestedChild)
            ),
          })
        }
      }

      return child
    }

    const actions = React.isValidElement(cta) ? cloneActions(cta) : cta

    return (
      <S.Alert
        data-testid={dataTestId}
        icon={icon}
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
        {icon !== null && <S.Icon icon={icon} size={size} variant={defaultVariantIcon} />}
        <S.Content>
          <Box flex={1}>{content}</Box>
          {!!actions && (
            <Box alignItems="center" display="flex" gap="sm">
              {actions}
            </Box>
          )}
        </S.Content>
      </S.Alert>
    )
  }
)

// We need this component to check its existence in <Alert> and to allow users to add Button in <Alert> content
const AlertButton = forwardRef<'button', Omit<ButtonProps, 'size'>>(
  ({ variant = 'secondary', ...props }, ref) => (
    <Button flexShrink={0} ref={ref} w="fit-content" {...props} variant={variant} />
  )
)
const AlertSecondaryButton = forwardRef<'button', Omit<ButtonProps, 'size'>>(
  ({ variant = 'tertiary', ...props }, ref) => (
    <Button flexShrink={0} ref={ref} w="fit-content" {...props} variant={variant} />
  )
)

export const Alert = Object.assign(AlertComponent, {
  Button: AlertButton,
  SecondaryButton: AlertSecondaryButton,
  Title,
})
