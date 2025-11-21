import { MenuItem } from '@ariakit/react'

import { classNames, forwardRefWithAs } from '@/utils'

import dropdownMenuStyles from './dropdown-menu.module.scss'
import type { ActionProps } from './types'

const cx = classNames(dropdownMenuStyles)

export const Action = forwardRefWithAs<ActionProps, 'button'>(
  ({ as: Component = 'button', className, ...props }, ref) => {
    return (
      <MenuItem
        {...props}
        render={<Component className={cx('item', 'action', className)} ref={ref} />}
      />
    )
  }
)

Action.displayName = 'DropdownMenu.Action'
