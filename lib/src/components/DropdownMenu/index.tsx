import React from 'react'
import * as Ariakit from '@ariakit/react'
import { useTheme } from '@xstyled/styled-components'

import { Arrow } from './Arrow'
import { Item } from './Item'
import { Separator } from './Separator'
import * as S from './styles'

import { ThemeValues } from '@/theme'
import { CreateWuiProps, forwardRef, WuiProps } from '@/System'

export interface DropdownMenuOptions extends Omit<Ariakit.MenuProps, 'gutter'> {
  /** default 4px (space.xs) */
  gutter?: keyof ThemeValues['space'] | number
  /** add custom props from styled system on DropdownMenu inner */
  innerProps?: WuiProps
}

export type DropdownMenuProps = CreateWuiProps<'div', DropdownMenuOptions>

const DropdownMenuComponent = forwardRef<'div', DropdownMenuProps>(
  ({ children, dataTestId, gutter = 'xs', innerProps = {}, store, ...rest }, ref) => {
    const theme = useTheme()
    const arrowElement = store.useState('arrowElement')

    let parsedGutter = gutter
    if (typeof parsedGutter === 'string') {
      // The value from the theme is in rem, e.g: 1.5rem
      // So we parse it to float and pass it to theme.toPx that will convert it to px, e.g: 24px
      // Since we want a number we parse it to int
      parsedGutter = parseInt(theme.toPx(parseFloat(theme.space[gutter])), 10) || 0
    }
    if (arrowElement) {
      parsedGutter = 0
    }

    return (
      <Ariakit.Menu
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

const Trigger = forwardRef<'button', TriggerProps>(({ as: As, store, ...rest }, ref) => {
  return (
    <Ariakit.MenuButton
      ref={ref}
      render={As ? props => <As {...props} /> : undefined}
      store={store}
      {...(rest as Ariakit.MenuButtonProps)}
    />
  )
})

export const DropdownMenu = Object.assign(DropdownMenuComponent, {
  Trigger,
  Item,
  Separator,
  Arrow,
})
