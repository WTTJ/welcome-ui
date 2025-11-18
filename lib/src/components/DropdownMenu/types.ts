import type {
  MenuArrowProps,
  MenuGroupLabelProps,
  MenuItemCheckboxProps,
  MenuItemCheckProps,
  MenuItemProps,
  MenuItemRadioProps,
  MenuProps,
  MenuSeparatorProps,
  MenuStore,
} from '@ariakit/react'
import type { ComponentPropsWithRef, ReactNode } from 'react'

export type ActionProps = MenuItemProps

export type ArrowProps = MenuArrowProps

export interface DropdownMenuOptions extends Omit<MenuProps, 'gutter'> {
  size?: 'lg' | 'md'
  withGutter?: boolean
}

export type GroupLabelProps = MenuGroupLabelProps

export type ItemCheckboxCheckProps = Omit<ComponentPropsWithRef<'input'>, 'onChange'> & {
  onChange?: (isChecked: boolean) => void
}

export type ItemCheckboxProps = MenuItemCheckboxProps

export type ItemContentProps = ComponentPropsWithRef<'div'>

export type ItemDefaultCheckProps = MenuItemCheckProps

export type ItemDescriptionProps = ComponentPropsWithRef<'div'>

export interface ItemProps extends MenuItemProps {
  variant?: 'checkbox' | 'checkbox-mark' | 'radio' | 'radio-mark' | 'toggle'
}

export type ItemRadioCheckProps = ComponentPropsWithRef<'input'> & ComponentPropsWithRef<'label'>

export type ItemRadioProps = MenuItemRadioProps

export type ItemToggleCheckProps = ComponentPropsWithRef<'input'>

export type SearchProps = MenuItemProps

export interface SeparatorProps extends MenuSeparatorProps {
  disabled?: boolean
}

export interface SubmenuOptions extends Omit<ItemProps, 'store'> {
  item: ReactNode
  size?: 'lg' | 'md'
}

export type TriggerProps = { store: MenuStore }

export type { MenuStore as UseDropdownMenu } from '@ariakit/react'
export type { MenuStoreProps as UseDropdownMenuProps } from '@ariakit/react'
export type { MenuStoreState as UseDropdownMenuState } from '@ariakit/react'
