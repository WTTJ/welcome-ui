import { MenuItem } from '@ariakit/react'

import { Icon } from '@/components/Icon'
import { InputText } from '@/components/InputText'
import { classNames, forwardRefWithAs } from '@/utils'

import dropdownMenuStyles from './dropdown-menu.module.scss'
import type { SearchProps } from './types'

const cx = classNames(dropdownMenuStyles)

export const Search = forwardRefWithAs<SearchProps, 'input'>(
  ({ as: Component = InputText, className, ...props }, ref) => {
    return (
      <MenuItem
        {...props}
        hideOnClick={false}
        ref={ref}
        render={
          <Component className={cx('item', 'search', className)} icon={<Icon name="search" />} />
        }
      />
    )
  }
)
