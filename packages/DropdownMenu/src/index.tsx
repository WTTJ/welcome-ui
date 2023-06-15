import React from 'react'
import {
  MenuButton,
  MenuInitialState,
  MenuOptions,
  MenuStateReturn,
  Menu as ReakitMenu,
  useMenuState,
} from 'reakit'
import { useNextFrame } from '@welcome-ui/utils'
import { CreateWuiProps, forwardRef, OmitReakitState, WuiProps } from '@welcome-ui/system'

import { Arrow } from './Arrow'
import { Item } from './Item'
import { Separator } from './Separator'
import * as S from './styles'

export interface DropdownMenuOptions {
  /** add custom props from styled system on DropdownMenu inner */
  innerProps?: WuiProps
  state: MenuStateReturn & {
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

export type DropdownMenuProps = CreateWuiProps<
  'div',
  OmitReakitState<DropdownMenuOptions, MenuOptions>
>

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

export type DropdownMenuStateReturn = MenuStateReturn & {
  /**
   * @deprecated
   * will be replace by open on ariakit (reakit v2)
   **/
  visible?: MenuStateReturn['visible']
  open: MenuStateReturn['visible']
}
export type DropdownMenuInitialState = MenuInitialState & {
  /**
   * @deprecated
   * will be replace by open on ariakit (reakit v2)
   **/
  visible?: MenuInitialState['visible']
  /**
   * Open the drawer on load
   */
  open?: MenuInitialState['visible']
}

export function useDropdownMenuState(options?: DropdownMenuInitialState): DropdownMenuStateReturn {
  const { open, visible, ...restOptions } = options || {}
  const dropdownMenuState = useMenuState({
    animated: true,
    visible: visible || open,
    ...restOptions,
  })

  return { open: dropdownMenuState.visible, ...dropdownMenuState }
}

export const DropdownMenu = Object.assign(DropdownMenuComponent, {
  Trigger: MenuButton,
  Item,
  Separator,
  Arrow,
})
