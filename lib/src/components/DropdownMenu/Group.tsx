import type { GroupProps } from '@ariakit/react'
import { MenuGroup, MenuGroupLabel } from '@ariakit/react'

import { classNames, forwardRefWithAs } from '@/utils'

import dropdownMenuStyles from './dropdown-menu.module.scss'
import type { GroupLabelProps } from './types'

const cx = classNames(dropdownMenuStyles)

export const Group = forwardRefWithAs<GroupProps, 'div'>(
  ({ as: Component = 'div', ...props }, ref) => {
    return <MenuGroup ref={ref} render={<Component />} {...props} />
  }
)

Group.displayName = 'DropdownMenu.Group'

export const GroupLabel = forwardRefWithAs<GroupLabelProps, 'div'>(
  ({ as: Component = 'div', className, ...props }, ref) => {
    return (
      <MenuGroupLabel
        {...props}
        ref={ref}
        render={<Component className={cx('item', 'group-label', className)} />}
      />
    )
  }
)

GroupLabel.displayName = 'DropdownMenu.GroupLabel'
