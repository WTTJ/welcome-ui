import React from 'react'
import * as Ariakit from '@ariakit/react'
import { As, CreateWuiProps, forwardRef, WuiProps } from '@welcome-ui/system'

import { Arrow } from './Arrow'
import { Item } from './Item'
import { Separator } from './Separator'
import * as S from './styles'

export interface DropdownMenuOptions extends Ariakit.MenuProps {
  /** add custom props from styled system on DropdownMenu inner */
  innerProps?: WuiProps
}

export type DropdownMenuProps = CreateWuiProps<'div', DropdownMenuOptions>

const DropdownMenuComponent = forwardRef<'div', DropdownMenuProps>(
  ({ children, dataTestId, innerProps = {}, store, gutter = 10, ...rest }, ref) => {
    const arrowElement = store.useState('arrowElement')
    const isOpen = store.useState('open')

    return (
      isOpen && (
        <Ariakit.Menu
          alwaysVisible
          aria-label="dropdown-menu"
          data-testid={dataTestId}
          gutter={arrowElement ? 0 : gutter}
          ref={ref}
          render={<S.Inner {...innerProps} />}
          store={store}
          tabIndex={0}
          {...rest}
        >
          {children}
        </Ariakit.Menu>
      )
    )
  }
)

export type UseDropdownMenu = Ariakit.MenuStore
export type UseDropdownMenuState = Ariakit.MenuStoreState
export type UseDropdownMenuOptions = Ariakit.MenuStoreProps

export function useDropdownMenu(options: UseDropdownMenuOptions = {}): UseDropdownMenu {
  const dropdownMenu = Ariakit.useMenuStore({
    animated: true,
    ...options,
  })

  return dropdownMenu
}

type TriggerProps = { store: UseDropdownMenu; children: React.ReactNode; as?: As }

export const Trigger = forwardRef<'button', TriggerProps>(({ as, store, ...rest }, ref) => {
  return <Ariakit.MenuButton as={as} ref={ref} store={store} {...rest} />
})

export const DropdownMenu = Object.assign(DropdownMenuComponent, {
  Trigger,
  Item,
  Separator,
  Arrow,
})
