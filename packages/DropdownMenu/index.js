import { bool, node, object } from 'prop-types'
import React from 'react'
import { MenuDisclosure, Menu as ReakitMenu, useMenuState } from 'reakit/Menu'
import { useNextFrame } from '@welcome-ui/utils'

import { Item } from './Item'
import { Separator } from './Separator'
import * as S from './styles'

export function DropdownMenu({ children, dataTestId, innerProps, visible, ...props }) {
  const delayedVisible = useNextFrame(visible)

  return (
    <ReakitMenu data-testid={dataTestId} tabIndex={0} visible={visible} {...props}>
      {menuProps => (
        <S.Inner
          {...menuProps}
          innerProps={innerProps}
          style={{
            ...menuProps.style,
            opacity: delayedVisible ? 1 : 0
          }}
        >
          {children}
        </S.Inner>
      )}
    </ReakitMenu>
  )
}

DropdownMenu.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  /** add custom props from styled system on DropdownMenu inner */
  innerProps: object,
  /** from useDropdownMenuState */
  visible: bool
}

DropdownMenu.Trigger = MenuDisclosure
DropdownMenu.Item = Item
DropdownMenu.Separator = Separator
export { useMenuState as useDropdownMenuState }
