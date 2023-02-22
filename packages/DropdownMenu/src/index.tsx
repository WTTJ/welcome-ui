import React from 'react'
import { MenuButton, MenuOptions, Menu as ReakitMenu, useMenuState } from 'reakit/Menu'
import { useNextFrame } from '@welcome-ui/utils'
import { CreateWuiProps, forwardRef, WuiProps } from '@welcome-ui/system'

import { Arrow } from './Arrow'
import { Item } from './Item'
import { Separator } from './Separator'
import * as S from './styles'

export interface DropdownMenuOptions {
  /** add custom props from styled system on DropdownMenu inner */
  innerProps?: WuiProps
  state: MenuOptions & {
    /**
     * @deprecated
     * will be replace by open on ariakit (reakit v2)
     **/
    visible?: MenuOptions['visible']
    /**
     * Open the menu on load
     */
    open?: MenuOptions['visible']
  }
}

export type DropdownMenuProps = CreateWuiProps<'div', DropdownMenuOptions>

const DropdownMenuComponent = forwardRef<'div', DropdownMenuProps>(
  ({ children, dataTestId, innerProps = {}, state = {}, ...props }, ref) => {
    const { open, visible } = state
    const delayedVisible = useNextFrame(open || visible)

    return (
      <ReakitMenu
        aria-label="dropdown-menu"
        as="div"
        data-testid={dataTestId}
        ref={ref}
        tabIndex={0}
        {...state}
        {...props}
      >
        {menuProps => (
          <S.Inner
            {...menuProps}
            {...(innerProps as Omit<WuiProps, keyof typeof menuProps>)}
            style={{
              ...menuProps.style,
              opacity: delayedVisible ? 1 : 0,
            }}
          >
            {children}
          </S.Inner>
        )}
      </ReakitMenu>
    )
  }
)

export const DropdownMenu = Object.assign(DropdownMenuComponent, {
  Trigger: MenuButton,
  Item,
  Separator,
  Arrow,
})

export { useMenuState as useDropdownMenuState }
export type DropdownMenuStateReturn = ReturnType<typeof useMenuState>
