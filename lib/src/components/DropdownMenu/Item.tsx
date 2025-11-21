import {
  MenuItem,
  MenuItemCheck,
  MenuItemCheckbox,
  MenuItemRadio,
  useMenuStore,
  useStoreState,
} from '@ariakit/react'
import { forwardRef, type Ref } from 'react'

import { Checkbox } from '@/components/Checkbox'
import { Radio } from '@/components/Radio'
import { Toggle } from '@/components/Toggle'
import { classNames, forwardRefWithAs } from '@/utils'

import { Icon } from '../Icon'

import dropdownMenuStyles from './dropdown-menu.module.scss'
import type {
  ItemCheckboxCheckProps,
  ItemCheckboxProps,
  ItemContentProps,
  ItemDefaultCheckProps,
  ItemDescriptionProps,
  ItemProps,
  ItemRadioCheckProps,
  ItemRadioProps,
  ItemToggleCheckProps,
} from './types'

const cx = classNames(dropdownMenuStyles)

export const Item = forwardRefWithAs<ItemProps, 'button'>(
  (
    { as: Component = 'button', children, className, name, onClick, value, variant, ...props },
    ref
  ) => {
    const hideOnClick = !variant || variant === 'radio' || variant === 'radio-mark'

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      onClick?.(e)
    }

    return (
      <MenuItem
        hideOnClick={hideOnClick}
        {...props}
        onClick={handleClick}
        ref={ref as unknown as Ref<HTMLDivElement>}
        render={
          <Component className={cx('item', className)}>
            {(() => {
              switch (variant) {
                case 'checkbox':
                  return (
                    <ItemCheckbox name={name} value={value}>
                      <ItemCheckboxCheck name={name} value={value} />
                      {children}
                    </ItemCheckbox>
                  )
                case 'checkbox-mark':
                  return (
                    <ItemCheckbox name={name} value={value}>
                      {children}
                      <ItemDefaultCheck />
                    </ItemCheckbox>
                  )
                case 'radio':
                  return (
                    <ItemRadio name={name} value={value as number | string}>
                      <ItemRadioCheck name={name} value={value} />
                      {children}
                    </ItemRadio>
                  )
                case 'radio-mark':
                  return (
                    <ItemRadio name={name} value={value as number | string}>
                      {children}
                      <ItemDefaultCheck />
                    </ItemRadio>
                  )
                case 'toggle':
                  return (
                    <ItemCheckbox name={name} value={value}>
                      <ItemToggleCheck name={name} value={value} />
                      {children}
                    </ItemCheckbox>
                  )
                default:
                  return children
              }
            })()}
          </Component>
        }
      />
    )
  }
)

Item.displayName = 'DropdownMenu.Item'

export const ItemContent = forwardRef<HTMLDivElement, ItemContentProps>(
  ({ className, ...props }, ref) => {
    return <div {...props} className={cx('item-content', className)} ref={ref} />
  }
)

ItemContent.displayName = 'DropdownMenu.ItemContent'

export const ItemDescription = forwardRef<HTMLDivElement, ItemDescriptionProps>(
  ({ className, ...props }, ref) => {
    return <div {...props} className={cx('item-description', className)} ref={ref} />
  }
)

ItemDescription.displayName = 'DropdownMenu.ItemDescription'

const ItemCheckbox = forwardRef<HTMLDivElement, ItemCheckboxProps>(
  ({ className, ...props }, ref) => {
    return <MenuItemCheckbox {...props} className={cx('item-checkbox', className)} ref={ref} />
  }
)

ItemCheckbox.displayName = 'DropdownMenu.ItemCheckbox'

const ItemRadio = forwardRef<HTMLDivElement, ItemRadioProps>(({ className, ...props }, ref) => {
  return <MenuItemRadio {...props} className={cx('item-radio', className)} ref={ref} />
})

ItemRadio.displayName = 'DropdownMenu.ItemRadio'

const ItemDefaultCheck = forwardRef<HTMLSpanElement, ItemDefaultCheckProps>(
  ({ className, ...props }, ref) => {
    return (
      <MenuItemCheck {...props} className={cx('item-default-check', className)} ref={ref}>
        <Icon name="check" size="md" />
      </MenuItemCheck>
    )
  }
)

ItemDefaultCheck.displayName = 'DropdownMenu.ItemDefaultCheck'

const ItemCheckboxCheck = forwardRef<HTMLInputElement, ItemCheckboxCheckProps>(
  ({ name, value = true, ...props }, ref) => {
    const checked = useIsItemChecked(name, value)

    return (
      <Checkbox
        aria-hidden="true"
        {...props}
        checked={checked}
        key={checked.toString()}
        ref={ref}
      />
    )
  }
)

ItemCheckboxCheck.displayName = 'DropdownMenu.ItemCheckboxCheck'

const ItemRadioCheck = forwardRef<HTMLInputElement & HTMLLabelElement, ItemRadioCheckProps>(
  ({ name, value, ...props }, ref) => {
    const checked = useIsItemChecked(name, value)

    return <Radio aria-hidden="true" {...props} checked={checked} ref={ref} />
  }
)

ItemRadioCheck.displayName = 'DropdownMenu.ItemRadioCheck'

const ItemToggleCheck = forwardRef<HTMLInputElement & HTMLLabelElement, ItemToggleCheckProps>(
  ({ className, name, value = true, ...props }, ref) => {
    const checked = useIsItemChecked(name, value)

    return (
      <Toggle
        aria-hidden="true"
        {...props}
        checked={checked}
        className={cx('item-toggle-check', className)}
        ref={ref}
        size="sm"
      />
    )
  }
)

ItemToggleCheck.displayName = 'DropdownMenu.ItemToggleCheck'

const useIsItemChecked = (name: string, value: boolean | number | readonly string[] | string) => {
  const store = useMenuStore()
  const storeState = useStoreState(store)
  const storeValue = storeState.values[name]
  const checked = Array.isArray(storeValue) ? storeValue.includes(value) : storeValue === value
  return checked
}
