import * as Ariakit from '@ariakit/react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import { Arrow } from './Arrow'
import dropdownMenuStyles from './dropdown-menu.module.scss'
import { Item } from './Item'
import { Separator } from './Separator'
import { Trigger } from './Trigger'

export type { ArrowProps } from './Arrow'
export type { ItemProps } from './Item'
export type { SeparatorProps } from './Separator'
export type { TriggerProps } from './Trigger'
export type UseDropdownMenu = Ariakit.MenuStore
export type UseDropdownMenuProps = Ariakit.MenuStoreProps
export type UseDropdownMenuState = Ariakit.MenuStoreState
export { useMenuStore as useDropdownMenu } from '@ariakit/react'

const cx = classNames(dropdownMenuStyles)

const DEFAULT_GUTTER = 4

export interface DropdownMenuOptions extends Omit<Ariakit.MenuProps, 'gutter'> {
  dataTestId?: string
  innerProps?: React.ComponentProps<'div'>
  withGutter?: boolean
}

const DropdownMenuComponent = forwardRef<HTMLDivElement, DropdownMenuOptions>(
  (
    { children, className, dataTestId, innerProps = {}, store, withGutter = true, ...rest },
    ref
  ) => {
    const arrowElement = Ariakit.useStoreState(store, 'arrowElement')
    const gutter = withGutter && !arrowElement ? DEFAULT_GUTTER : 0

    const { className: innerClassName, ...otherInnerProps } = innerProps

    return (
      <Ariakit.Menu
        aria-label="dropdown-menu"
        className={className}
        data-testid={dataTestId}
        gutter={gutter}
        ref={ref}
        render={<div className={cx('inner', innerClassName)} {...otherInnerProps} />}
        store={store}
        tabIndex={0}
        {...rest}
      >
        {children}
      </Ariakit.Menu>
    )
  }
)

export const DropdownMenu = Object.assign(DropdownMenuComponent, {
  Arrow,
  Item,
  Separator,
  Trigger,
})
