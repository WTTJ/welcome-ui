import React, { Children, cloneElement } from 'react'

import { Title } from './Title'
import * as S from './styles'

import { CloseButton } from '@/CloseButton'
import { Button, ButtonProps } from '@/Button'
import { CreateWuiProps, forwardRef } from '@/System'
import { Box } from '@/Box'

type Size = 'sm' | 'md'
type Variant = 'danger' | 'success' | 'warning' | 'info' | 'default' | 'beige'
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

type CloneActionsReturns = React.ReactElement<
  AlertProps,
  string | React.JSXElementConstructor<AlertProps>
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

    const content = Children.toArray(children).map((child: React.ReactElement) => {
      if (child.type === Title) return cloneElement(child, { variant: size })

      return child
    })

    // Handle clone actions recursively in case of multiple buttons
    const cloneActions = (child: React.ReactElement<AlertProps>): CloneActionsReturns => {
      if (child) {
        if (child.type === AlertButton) return cloneElement(child, { size })
        if (child.type === AlertSecondaryButton) return cloneElement(child, { size })

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
          <Box
            alignItems="flex-start"
            display="flex"
            flexDirection="column"
            gap="md"
            justifyContent="space-between"
          >
            <Box flex={1}>{content}</Box>
            {!!actions && (
              <Box alignItems="center" display="flex" gap="sm">
                {actions}
              </Box>
            )}
          </Box>
        </S.Content>
      </S.Alert>
    )
  }
)

// We need this component to check its existence in <Alert> and to allow users to add Button in <Alert> content
const AlertButton = forwardRef<'button', Omit<ButtonProps, 'size' | 'variant'>>((props, ref) => (
  <Button flexShrink={0} ref={ref} w="fit-content" {...props} variant="secondary" />
))

const AlertSecondaryButton = forwardRef<'button', Omit<ButtonProps, 'size' | 'variant'>>(
  (props, ref) => <Button flexShrink={0} ref={ref} w="fit-content" {...props} variant="tertiary" />
)

export const Alert = Object.assign(AlertComponent, {
  Title,
  Button: AlertButton,
  SecondaryButton: AlertSecondaryButton,
})
