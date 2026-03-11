import { forwardRef } from 'react'

import { classNames } from '@/utils'

import styles from './floating-action-bar.module.scss'
import type { FloatingActionBarProps } from './types'

const cx = classNames(styles)

export const FloatingActionBar = forwardRef<HTMLDivElement, FloatingActionBarProps>(
  ({ children, className, dataTestId, ...rest }, ref) => {
    return (
      <div
        className={cx('floating-action-bar', className)}
        data-testid={dataTestId}
        ref={ref}
        role="toolbar"
        {...rest}
      >
        <div className={cx('container')}>{children}</div>
      </div>
    )
  }
)
