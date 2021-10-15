import React from 'react'
import { MenuButton, MenuProps, Menu as ReakitMenu, useMenuState } from 'reakit/Menu'
import { useNextFrame } from '@welcome-ui/utils'
import { CreateWuiProps, WuiProps } from '@welcome-ui/system'

import { Item } from './Item'
import { Separator } from './Separator'
import * as S from './styles'

export interface DropdownMenuOptions {
  innerProps?: WuiProps
  visible?: boolean
}

export type DropdownMenuProps = CreateWuiProps<typeof ReakitMenu, DropdownMenuOptions & MenuProps>

const DropdownMenuComponent: React.FC<DropdownMenuProps> = ({
  children,
  dataTestId,
  innerProps = {},
  visible = false,
  ...props
}) => {
  const delayedVisible = useNextFrame(visible)

  return (
    <ReakitMenu
      aria-label="dropdown-menu"
      as="div"
      data-testid={dataTestId}
      tabIndex={0}
      visible={visible}
      {...props}
    >
      {menuProps => (
        // todo why colors are incompatible between WuiProps & StyledComponent
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <S.Inner
          {...menuProps}
          {...innerProps}
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

export const DropdownMenu = Object.assign(DropdownMenuComponent, {
  Trigger: MenuButton,
  Item,
  Separator,
})

export { useMenuState as useDropdownMenuState }
