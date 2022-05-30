import React from 'react'
import { MenuItem, MenuItemOptions } from 'reakit/Menu'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './Item.styled'

export type ItemProps = CreateWuiProps<'button', MenuItemOptions>

export const Item = forwardRef<'button', ItemProps>(({ as, children, ...props }, ref) => {
  return (
    <MenuItem as={undefined} type="button" {...props} ref={ref}>
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
