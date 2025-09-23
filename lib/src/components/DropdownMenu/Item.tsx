import { MenuItem } from '@ariakit/react'

import { classNames, forwardRefWithAs } from '@/utils'

import dropdownMenuStyles from './dropdown-menu.module.scss'
import type { ItemProps } from './types'

const cx = classNames(dropdownMenuStyles)

export const Item = forwardRefWithAs<ItemProps, 'button'>(
  ({ as: Component = 'button', className, ...rest }, ref) => {
    return (
      <MenuItem
        render={<Component className={cx('item', className)} ref={ref} />}
        type="button"
        {...rest}
      />
    )
  }
)
