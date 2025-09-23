import { Menu, useStoreState } from '@ariakit/react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import { Arrow } from './Arrow'
import dropdownMenuStyles from './dropdown-menu.module.scss'
import { Item } from './Item'
import { Separator } from './Separator'
import { Trigger } from './Trigger'
import type { DropdownMenuOptions } from './types'

export * from './types'
export { useMenuStore as useDropdownMenu } from '@ariakit/react'

const cx = classNames(dropdownMenuStyles)

const DEFAULT_GUTTER = 4

const DropdownMenuComponent = forwardRef<HTMLDivElement, DropdownMenuOptions>(
  (
    { children, className, dataTestId, innerProps = {}, store, withGutter = true, ...rest },
    ref
  ) => {
    const arrowElement = useStoreState(store, 'arrowElement')
    const gutter = withGutter && !arrowElement ? DEFAULT_GUTTER : 0

    const { className: innerClassName, ...otherInnerProps } = innerProps

    return (
      <Menu
        aria-label="dropdown-menu"
        className={className}
        data-testid={dataTestId}
        gutter={gutter}
        ref={ref}
        render={<div className={cx('inner', innerClassName)} {...otherInnerProps} />}
        store={store}
        tabIndex={0}
        {...rest}
      >
        {children}
      </Menu>
    )
  }
)

export const DropdownMenu = Object.assign(DropdownMenuComponent, {
  Arrow,
  Item,
  Separator,
  Trigger,
})
