import React, { forwardRef } from 'react'
import { MenuItem, MenuItemOptions } from 'reakit/Menu'
import { CreateWuiProps } from '@welcome-ui/system'

import * as S from './Item.styled'

export type ItemProps = CreateWuiProps<typeof MenuItem, MenuItemOptions>

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
