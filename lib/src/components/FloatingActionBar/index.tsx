import { forwardRef } from 'react'

import { DropdownMenu } from '@/components/DropdownMenu'
import { classNames } from '@/utils'

import { Actions } from './Actions'
import { Button } from './Button'
import styles from './floating-action-bar.module.scss'
import { Pagination } from './Pagination'
import type { FloatingActionBarProps } from './types'

const cx = classNames(styles)

const FloatingActionBarActionsItem = DropdownMenu.Item

const FloatingActionBarComponent = forwardRef<HTMLDivElement, FloatingActionBarProps>(
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

FloatingActionBarComponent.displayName = 'FloatingActionBar'

export const FloatingActionBar = Object.assign(FloatingActionBarComponent, {
  Actions,
  ActionsItem: FloatingActionBarActionsItem,
  Button,
  Pagination,
})
