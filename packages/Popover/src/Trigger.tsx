import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import React from 'react'

import { UsePopover } from './usePopover'
import * as S from './styles'

export type PopoverTriggerProps = CreateWuiProps<'button', { store: UsePopover }>

export const PopoverTrigger = forwardRef<'button', PopoverTriggerProps>(
  ({ as, store, ...rest }, ref) => {
    return <S.PopoverTrigger store={store} {...rest} forwardedAs={as} ref={ref} />
  }
)

export type PopoverHoverTriggerProps = CreateWuiProps<'button', { store: UsePopover }>

export const PopoverHoverTrigger = forwardRef<'button', PopoverHoverTriggerProps>(
  ({ as, store, ...rest }, ref) => {
    return <S.PopoverHoverTrigger store={store} {...rest} forwardedAs={as} ref={ref} />
  }
)
