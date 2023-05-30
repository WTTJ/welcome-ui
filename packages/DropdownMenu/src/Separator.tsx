import React from 'react'
import { MenuSeparator, MenuSeparatorProps } from 'reakit'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './Separator.styled'

import { DropdownMenuOptions } from '.'

export type SeparatorProps = CreateWuiProps<
  'div',
  MenuSeparatorProps & { state: DropdownMenuOptions['state'] }
>

export const Separator = forwardRef<'div', SeparatorProps>(({ state, ...rest }, ref) => {
  return <MenuSeparator as={S.Separator} ref={ref} {...state} {...rest} />
})
