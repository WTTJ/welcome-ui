import { forwardRef } from 'react'

import { Alert } from '@/components/Alert'
import { classNames } from '@/utils'

import toastStyles from '../toast.module.scss'
import type { GrowlProps } from '../types'

const cx = classNames(toastStyles)

/**
 * @name Toast.Growl
 */
export const Growl = forwardRef<HTMLDivElement, GrowlProps>(
  ({ children, className, hasCloseButton = true, onClose, variant, ...rest }, ref) => {
    return (
      <Alert
        className={cx('growl', className)}
        handleClose={hasCloseButton ? onClose : undefined}
        ref={ref}
        variant={variant}
        {...rest}
      >
        <div className={cx('pr-xl')}>{children}</div>
      </Alert>
    )
  }
)

Growl.displayName = 'Growl'
