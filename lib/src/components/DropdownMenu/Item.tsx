import * as Ariakit from '@ariakit/react'

import { classNames, forwardRefWithAs } from '@/utils'

import dropdownMenuStyles from './dropdown-menu.module.scss'

const cx = classNames(dropdownMenuStyles)

export type ItemProps = Ariakit.MenuItemProps

export const Item = forwardRefWithAs<ItemProps, 'button'>(({ as: As, className, ...rest }, ref) => {
  const Component = As || 'button'
  return (
    <Ariakit.MenuItem
      render={<Component className={cx('item', className)} ref={ref} />}
      type="button"
      {...rest}
    />
  )
})
