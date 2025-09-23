import * as Ariakit from '@ariakit/react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import { Arrow } from './Arrow'
import dropdownMenuStyles from './dropdown-menu.module.scss'
import { Item } from './Item'
import { Separator } from './Separator'
import { Trigger } from './Trigger'

export { useMenuStore as useDropdownMenu } from '@ariakit/react'

const cx = classNames(dropdownMenuStyles)

const DEFAULT_GUTTER = 4

export interface DropdownMenuOptions extends Omit<Ariakit.MenuProps, 'gutter'> {
  dataTestId?: string
  /** add custom props from styled system on DropdownMenu inner */
  innerProps?: React.ComponentProps<'div'>
  withGutter?: boolean
}

const DropdownMenuComponent = forwardRef<HTMLDivElement, DropdownMenuOptions>(
  (
    { children, className, dataTestId, innerProps = {}, store, withGutter = true, ...rest },
    ref
  ) => {
    const arrowElement = Ariakit.useStoreState(store, 'arrowElement')

    const parsedGutter: number = arrowElement || !withGutter ? 0 : DEFAULT_GUTTER
    const { className: innerClassName, ...otherInnerProps } = innerProps

    return (
      <Ariakit.Menu
        aria-label="dropdown-menu"
        className={className}
        data-testid={dataTestId}
        gutter={parsedGutter}
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
