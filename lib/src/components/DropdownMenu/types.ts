import type {
  MenuArrowProps,
  MenuItemProps,
  MenuProps,
  MenuSeparatorProps,
  MenuStore,
} from '@ariakit/react'

export type ArrowProps = MenuArrowProps

export interface DropdownMenuOptions extends Omit<MenuProps, 'gutter'> {
  dataTestId?: string
  innerProps?: React.ComponentProps<'div'>
  withGutter?: boolean
}

export type ItemProps = MenuItemProps

export type SeparatorProps = MenuSeparatorProps

export type TriggerProps = { store: MenuStore }

export type { MenuStore as UseDropdownMenu } from '@ariakit/react'
export type { MenuStoreProps as UseDropdownMenuProps } from '@ariakit/react'
export type { MenuStoreState as UseDropdownMenuState } from '@ariakit/react'
