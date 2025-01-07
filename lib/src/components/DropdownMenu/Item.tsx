import React from 'react'
import * as Ariakit from '@ariakit/react'

import { CreateWuiProps, forwardRef } from '../System'

import * as S from './Item.styled'

export type ItemProps = CreateWuiProps<'button', Omit<Ariakit.MenuItemProps, 'as'>>

export const Item = forwardRef<'button', ItemProps>(({ as, ...rest }, ref) => {
  return <Ariakit.MenuItem ref={ref} type="button" {...rest} render={<S.Item as={as} />} />
})

Item.displayName = 'Item'
