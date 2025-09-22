import React, { Children, cloneElement, forwardRef } from 'react'

import { Button } from '@/components/Button'
import type { ButtonProps } from '@/components/Button/types'
import { Text } from '@/components/Text'
import { VariantIcon } from '@/components/VariantIcon'
import { classNames } from '@/utils'
import { CloseButton } from '@old/CloseButton'

import alertStyles from './alert.module.scss'
import type { AlertProps, AlertTitleProps, CloneActionsReturns } from './types'

const cx = classNames(alertStyles)

const AlertComponent = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      children,
      className,
      cta,
      dataTestId,
      handleClose,
      hideIcon,
      isFullWidth,
      size = 'sm',
      variant,
      ...rest
    },
    ref
  ) => {
    const closeButtonDataTestId = dataTestId ? `${dataTestId}-close-button` : undefined
    const defaultVariantIcon = variant === 'beige' ? undefined : variant
    const withAiButton = variant === 'ai'
    const showIcon = !hideIcon

    const content = Children.toArray(children).map((child: React.ReactElement) => {
      if (child.type === AlertTitle)
        return cloneElement(child, { hasCloseButton: !!handleClose, variant: size })

      return child
    })

    // Handle clone actions recursively in case of multiple buttons
    const cloneActions = (child: React.ReactElement): CloneActionsReturns => {
      if (child) {
        if (child.type === AlertButton) {
          // If Alert variant is ai, we override the CTA Buttons to use the AI sub-variants
          return cloneElement<ButtonProps>(child, {
            size,
            variant: withAiButton ? 'primary-ai' : undefined,
          })
        }
        if (child.type === AlertSecondaryButton) {
          return cloneElement<ButtonProps>(child, {
            size,
            variant: withAiButton ? 'tertiary-ai' : undefined,
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
      <div
        className={cx(
          'root',
          isFullWidth && 'full-width',
          size && `size-${size}`,
          variant && `variant-${variant}`,
          showIcon && 'icon',
          className
        )}
        data-testid={dataTestId}
        ref={ref}
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
        {showIcon ? (
          <VariantIcon className="self-start" size={size} variant={defaultVariantIcon} />
        ) : null}
        <div className={cx('content')}>
          <Text className="flex-1">{content}</Text>
          {!!actions && <div className="flex items-center gap-sm">{actions}</div>}
        </div>
      </div>
    )
  }
)

// We need this component to check its existence in <Alert> and to allow users to add Button in <Alert> content
const AlertButton = forwardRef<HTMLButtonElement, Omit<ButtonProps, 'size'>>(
  ({ variant = 'secondary', ...props }, ref) => (
    <Button className="shrink-0 w-fit" ref={ref} {...props} variant={variant} />
  )
)
const AlertSecondaryButton = forwardRef<HTMLButtonElement, Omit<ButtonProps, 'size'>>(
  ({ variant = 'tertiary', ...props }, ref) => (
    <Button className="shrink-0 w-fit" ref={ref} {...props} variant={variant} />
  )
)
export const AlertTitle = ({ children, hasCloseButton, variant, ...rest }: AlertTitleProps) => {
  return (
    <Text
      as="span"
      className={cx('title', `title-size-${variant}`, hasCloseButton && 'title-close-button')}
      variant={variant}
      {...rest}
    >
      {children}
    </Text>
  )
}

export const Alert = Object.assign(AlertComponent, {
  Button: AlertButton,
  SecondaryButton: AlertSecondaryButton,
  Title: AlertTitle,
})
