import { node } from 'prop-types'
import React, { forwardRef } from 'react'
import { MenuItem } from 'reakit/Menu'

import * as S from './Item.styled'

export const Item = forwardRef(({ as, children, ...props }, ref) => {
  return (
    <MenuItem type="button" {...props} ref={ref}>
      {menuItemProps => {
        return (
          <S.Item as={as} {...menuItemProps}>
            {children}
          </S.Item>
        )
      }}
    </MenuItem>
  )
})

Item.displayName = 'Item'

Item.propTypes /* remove-proptypes */ = {
  /** replace button from another node component */
  as: node,
  children: node.isRequired
}
