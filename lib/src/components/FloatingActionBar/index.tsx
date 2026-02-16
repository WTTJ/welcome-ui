import { forwardRef } from 'react'

import { classNames } from '@/utils'

import { Actions } from './Actions'
import { Button } from './Button'
import styles from './floatingBarAction.module.scss'
import { Pagination } from './Pagination'
import type { FloatingActionBarProps } from './types'

const cx = classNames(styles)

const FloatingActionBarComponent = forwardRef<HTMLDivElement, FloatingActionBarProps>(
  ({ children, className, dataTestId, ...rest }, ref) => {
    return (
      <div
        {...rest}
        className={cx('floating-action-bar', className)}
        data-testid={dataTestId}
        ref={ref}
        role="toolbar"
      >
        <div className={cx('container')}>{children}</div>
      </div>
    )
  }
)

FloatingActionBarComponent.displayName = 'FloatingActionBar'

export const FloatingActionBar = Object.assign(FloatingActionBarComponent, {
  Actions,
  Button,
  Pagination,
})
