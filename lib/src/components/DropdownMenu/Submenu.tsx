import { MenuButton, MenuProvider, useMenuStore } from '@ariakit/react'
import { forwardRef } from 'react'

import { Item } from './Item'
import type { SubmenuOptions } from './types'

import { DropdownMenu } from './index'

export * from './types'
export { useMenuStore as useDropdownMenu } from '@ariakit/react'

export const Submenu = forwardRef<HTMLDivElement, SubmenuOptions>(
  ({ children, item, size = 'lg', ...props }, ref) => {
    const menu = useMenuStore()

    return (
      <MenuProvider store={menu}>
        <MenuButton {...props} ref={ref} render={<Item>{item}</Item>} />
        <DropdownMenu size={size} withGutter>
          {children}
        </DropdownMenu>
      </MenuProvider>
    )
  }
)
