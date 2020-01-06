import { node } from 'prop-types'
import React from 'react'
import { MenuItem } from 'reakit/Menu'

import * as S from './Item.styled'

export function Item({ as, children, ...props }) {
  return (
    <MenuItem type="button" {...props}>
      {menuItemProps => (
        <S.Item as={as} {...menuItemProps}>
          {children}
        </S.Item>
      )}
    </MenuItem>
  )
}

Item.propTypes = {
  /** replace button from another node component */
  as: node,
  children: node.isRequired
}
