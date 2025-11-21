import { forwardRef } from 'react'

import { Button } from '@/components/Button'
import type { ButtonProps } from '@/components/Button/types'
import { CloseButton } from '@/components/CloseButton'
import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames, forwardRefWithAs } from '@/utils'

import { ICON } from '..'
import toastStyles from '../toast.module.scss'
import type { GrowlProps } from '../types'

const cx = classNames(toastStyles)

/**
 * @name Toast.Growl
 */
export const Growl = forwardRef<HTMLDivElement, GrowlProps>(
  (
    {
      children,
      className,
      cta,
      duration,
      hasCloseButton = true,
      onClose,
      showProgressBar = false,
      title,
      variant = 'info',
      ...rest
    },
    ref
  ) => {
    return (
      <div className={cx('root', `variant-${variant}`, className)} ref={ref} {...rest}>
        <div className={cx('growl')}>
          {variant ? <Icon className={cx('icon')} name={ICON[variant]} size="lg" /> : null}
          <div className={cx('content')}>
            <span>
              <Text variant="body-md-strong">{title}</Text>
              <Text variant="body-md">{children}</Text>
            </span>
            {cta ? <>{cta}</> : null}
          </div>
          {hasCloseButton ? (
            <CloseButton
              className={cx('close-button')}
              onClick={e => {
                e.preventDefault()
                onClose?.()
              }}
              size="sm"
            />
          ) : null}
        </div>
        <div
          className={cx(showProgressBar && 'progress')}
          style={{
            ['--duration' as keyof React.CSSProperties]: !hasCloseButton
              ? '5000ms'
              : `${duration}ms`,
          }}
        >
          <div className={cx('progress-bar')} />
        </div>
      </div>
    )
  }
)

Growl.displayName = 'Toast.Growl'

export const GrowlAction = forwardRefWithAs<ButtonProps, 'button'>((props, ref) => (
  <Button ref={ref} size="md" variant="secondary" {...props} />
))

GrowlAction.displayName = 'Toast.GrowlAction'
