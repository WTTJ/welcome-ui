import { Menu, useStoreState } from '@ariakit/react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import { Action } from './Action'
import { Arrow } from './Arrow'
import dropdownMenuStyles from './dropdown-menu.module.scss'
import { Group, GroupLabel } from './Group'
import { ItemContent as Content, ItemDescription as Description, Item } from './Item'
import { Search } from './Search'
import { Separator } from './Separator'
import { Trigger } from './Trigger'
import type { DropdownMenuOptions } from './types'

export * from './types'
export { useMenuStore as useDropdownMenu } from '@ariakit/react'

const cx = classNames(dropdownMenuStyles)

const DEFAULT_GUTTER = 8

const DropdownMenuComponent = forwardRef<HTMLDivElement, DropdownMenuOptions>(
  ({ className, size = 'lg', store, withGutter = true, ...props }, ref) => {
    const arrowElement = useStoreState(store, 'arrowElement')
    const gutter = withGutter && !arrowElement ? DEFAULT_GUTTER : 0

    return (
      <Menu
        {...props}
        aria-label="dropdown-menu"
        className={className}
        gutter={gutter}
        ref={ref}
        render={<div className={cx('root', `size-${size}`, className)} />}
        store={store}
        tabIndex={0}
      />
    )
  }
)

// Import after `DropdownMenuComponent` declaration to avoid circular dependency
import { Submenu } from './Submenu'

export const DropdownMenu = Object.assign(DropdownMenuComponent, {
  Action,
  Arrow,
  Content,
  Description,
  Group,
  GroupLabel,
  Item,
  Search,
  Separator,
  Submenu,
  Trigger,
})
