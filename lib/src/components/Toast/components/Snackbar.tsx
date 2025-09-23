import { forwardRef } from 'react'

import { Alert } from '@/components/Alert'
import { Button } from '@/components/Button'
import type { ButtonProps } from '@/components/Button/types'
import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import toastStyles from '../toast.module.scss'
import type { SnackbarProps } from '../types'

const cx = classNames(toastStyles)
/**
 * @name Toast.Snackbar
 */
export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  ({ children, className, cta, hasCloseButton = true, onClose, variant, ...rest }, ref) => (
    <Alert
      className={cx('snackbar', className)}
      handleClose={hasCloseButton ? onClose : undefined}
      ref={ref}
      variant={variant}
      {...rest}
    >
      <div className={cx('items-center', 'flex', 'gap-sm')}>
        {children}
        {cta ? <div className={cx('snackbar-separator', `${variant}`)}>{cta}</div> : null}
      </div>
    </Alert>
  )
)

export const SnackbarAction = forwardRefWithAs<ButtonProps, 'button'>((props, ref) => (
  <Button ref={ref} size="xs" variant="ghost" {...props} />
))

Snackbar.displayName = 'Snackbar'
