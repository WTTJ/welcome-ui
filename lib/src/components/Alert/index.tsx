import React, { Children, cloneElement, forwardRef } from 'react'

import type { ButtonProps } from '@/components/Button/types'
import { CloseButton } from '@/components/CloseButton'
import { Icon } from '@/components/Icon'
import type { IconProps } from '@/components/Icon/types'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import alertStyles from './alert.module.scss'
import { AlertButton, AlertSecondaryButton } from './components/Buttons'
import { AlertTitle } from './components/Title'
import type { AlertProps } from './types'

const cx = classNames(alertStyles)

export const ICON: Record<AlertProps['variant'], IconProps['name']> = {
  ai: 'sparkles',
  brand: 'lightbulb-alt',
  danger: 'exclamation-octagon',
  info: 'info-circle',
  success: 'check-circle',
  warning: 'exclamation-triangle',
}

const AlertComponent = forwardRef<HTMLDivElement, AlertProps>(
  (
    { children, className, cta, handleClose, isFullWidth, size = 'md', variant = 'brand', ...rest },
    ref
  ) => {
    const isAiVariant = variant === 'ai'
    // Check if Alert has Title component
    const hasTitle = Children.toArray(children).some(child => {
      if (React.isValidElement(child)) {
        return child.type === AlertTitle
      }
      return false
    })

    const icon = (
      <div className={cx('icon-wrapper', `icon-wrapper-${variant}`)}>
        <Icon name={ICON[variant]} />
      </div>
    )

    const content = Children.toArray(children).map((child: React.ReactElement) => {
      if (child.type === AlertTitle)
        return (
          <div className={cx('title-with-icon')}>
            {icon}
            {cloneElement(child, {
              hasCloseButton: !!handleClose,
              variant: `body-${size}-strong`,
            })}
          </div>
        )

      return child
    })

    const cloneActions = (children: React.ReactNode): React.ReactElement[] => {
      return Children.toArray(children).flatMap((child: React.ReactElement) => {
        // Support Fragments to wrap multiple buttons
        if (React.isValidElement(child) && child.type === React.Fragment) {
          return cloneActions((child.props as { children: React.ReactNode }).children)
        }

        if (child.type === AlertButton) {
          return cloneElement<ButtonProps>(child, {
            size,
            variant: isAiVariant ? 'primary-ai' : undefined,
          })
        }

        if (child.type === AlertSecondaryButton) {
          return cloneElement<ButtonProps>(child, {
            size,
          })
        }

        return child
      })
    }

    const actions = !!cta && cloneActions(cta)

    return (
      <div
        className={cx(
          'root',
          isFullWidth && 'full-width',
          `size-${size}`,
          variant && `variant-${variant}`,
          className
        )}
        ref={ref}
        {...rest}
      >
        {!!handleClose && <CloseButton className={cx('close-button')} onClick={handleClose} />}
        <div className={cx('content')}>
          <Text
            as="div"
            className={cx('content-text', !hasTitle && `without-title`)}
            variant={`body-${size}`}
          >
            {!hasTitle && icon}
            {content}
          </Text>
          {!!actions && <div className={cx('content-actions')}>{actions}</div>}
        </div>
      </div>
    )
  }
)

AlertComponent.displayName = 'Alert'

export const Alert = Object.assign(AlertComponent, {
  Button: AlertButton,
  SecondaryButton: AlertSecondaryButton,
  Title: AlertTitle,
})
