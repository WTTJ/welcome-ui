import { forwardRef } from 'react'

import { Button } from '@/components/Button'
import type { ButtonProps } from '@/components/Button/types'
import { CloseButton } from '@/components/CloseButton'
import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import { ICON } from '..'
import toastStyles from '../toast.module.scss'
import type { SnackbarProps } from '../types'

const cx = classNames(toastStyles)
/**
 * @name Toast.Snackbar
 */
export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  (
    {
      children,
      className,
      cta,
      duration,
      hasCloseButton = true,
      hideProgressBar = false,
      onClose,
      variant = 'info',
      ...rest
    },
    ref
  ) => (
    <div className={cx('root', `variant-${variant}`, className)} ref={ref} {...rest}>
      <div className={cx('snackbar')}>
        {variant ? <Icon className={cx('icon')} name={ICON[variant]} size="lg" /> : null}
        <Text variant="body-md-strong">{children}</Text>
        {cta ? <>{cta}</> : null}
        {hasCloseButton ? <CloseButton onClick={onClose} size="sm" /> : null}
      </div>
      <div
        className={cx('progress', hideProgressBar && 'hide-progress-bar')}
        style={{
          ['--duration' as keyof React.CSSProperties]: !hasCloseButton ? '5000ms' : `${duration}ms`,
        }}
      >
        <div className={cx('progress-bar')} />
      </div>
    </div>
  )
)

export const SnackbarAction = forwardRefWithAs<ButtonProps, 'button'>((props, ref) => (
  <Button ref={ref} size="md" variant="secondary" {...props} />
))

Snackbar.displayName = 'Snackbar'
