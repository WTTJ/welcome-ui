import React, { forwardRef } from 'react'
import { MenuItem, MenuItemProps } from 'reakit/Menu'
import { As } from '@welcome-ui/system'

import * as S from './Item.styled'

export type ItemOptions = { as?: As }
export type ItemProps = MenuItemProps & ItemOptions

export const Item = forwardRef<HTMLButtonElement, ItemProps>(({ as, children, ...props }, ref) => {
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
