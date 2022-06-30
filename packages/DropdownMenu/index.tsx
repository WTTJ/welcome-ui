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
  visible?: boolean
}

export type DropdownMenuProps = CreateWuiProps<'div', DropdownMenuOptions & MenuOptions>

const DropdownMenuComponent = forwardRef<'div', DropdownMenuProps>(
  ({ children, dataTestId, innerProps = {}, visible = false, ...props }, ref) => {
    const delayedVisible = useNextFrame(visible)

    return (
      <ReakitMenu
        aria-label="dropdown-menu"
        as="div"
        data-testid={dataTestId}
        ref={ref}
        tabIndex={0}
        visible={visible}
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
