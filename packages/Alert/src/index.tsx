import React, { Children, cloneElement } from 'react'
import { Box, BoxProps } from '@welcome-ui/box'
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
  ctaPosition?: 'bottom' | 'right'
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

const LAYOUT: { bottom: BoxProps; right: BoxProps } = {
  bottom: {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  right: {
    alignItems: { _: 'flex-start', md: 'center' },
    flexDirection: { _: 'column', md: 'row' },
  },
}

const AlertComponent = forwardRef<'div', AlertProps>(
  (
    {
      children,
      cta,
      ctaPosition = 'right',
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

      return child
    }

    const actions = React.isValidElement(cta) ? cloneActions(cta) : cta

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
          size={size}
          variant={defaultVariantIcon}
        />
        <Box flex={1}>
          <Box display="flex" gap="md" justifyContent="space-between" {...LAYOUT[ctaPosition]}>
            <Box flex={1}>{content}</Box>
            {!!actions && (
              <Box alignItems="center" display="flex" gap="sm">
                {actions}
              </Box>
            )}
          </Box>
        </Box>
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
