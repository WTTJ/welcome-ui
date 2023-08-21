import React from 'react'
import * as Ariakit from '@ariakit/react'
import { CreateWuiProps, forwardRef, WuiProps } from '@welcome-ui/system'
import { useTheme } from '@xstyled/styled-components'

import { Arrow } from './Arrow'
import { Item } from './Item'
import { Separator } from './Separator'
import * as S from './styles'

export interface DropdownMenuOptions extends Omit<Ariakit.MenuProps, 'gutter'> {
  /** add custom props from styled system on DropdownMenu inner */
  innerProps?: WuiProps
  gutter?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | number
}

export type DropdownMenuProps = CreateWuiProps<'div', DropdownMenuOptions>

const DropdownMenuComponent = forwardRef<'div', DropdownMenuProps>(
  (
    {
      children,
      dataTestId,
      innerProps = {},
      store,
      // TODO: change to a value from WUI, we have 8 & 12 but not 10
      gutter = 10,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme()
    const arrowElement = store.useState('arrowElement')
    const isOpen = store.useState('open')

    let parsedGutter = gutter
    if (typeof parsedGutter === 'string') {
      parsedGutter = parseInt(theme.toPx(parseFloat(theme.space[gutter])), 10) || 0
    }
    if (arrowElement) {
      parsedGutter = 0
    }

    return (
      isOpen && (
        <Ariakit.Menu
          alwaysVisible
          aria-label="dropdown-menu"
          data-testid={dataTestId}
          gutter={parsedGutter}
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
export type UseDropdownMenuProps = Ariakit.MenuStoreProps
export type UseDropdownMenuState = Ariakit.MenuStoreState

export function useDropdownMenu(options: UseDropdownMenuProps = {}): UseDropdownMenu {
  const dropdownMenu = Ariakit.useMenuStore({
    animated: true,
    ...options,
  })

  return dropdownMenu
}

type TriggerOptions = { store: UseDropdownMenu }
type TriggerProps = CreateWuiProps<'button', TriggerOptions>

export const Trigger = forwardRef<'button', TriggerProps>(({ as, store, ...rest }, ref) => {
  return <Ariakit.MenuButton as={as} ref={ref} store={store} {...rest} />
})

export const DropdownMenu = Object.assign(DropdownMenuComponent, {
  Trigger,
  Item,
  Separator,
  Arrow,
})
