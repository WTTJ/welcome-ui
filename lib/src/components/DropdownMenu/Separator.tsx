import React from 'react'
import * as Ariakit from '@ariakit/react'

import * as S from './Separator.styled'

import { CreateWuiProps, forwardRef } from '@/System'

export type SeparatorProps = CreateWuiProps<'div', Ariakit.MenuSeparatorProps>

export const Separator = forwardRef<'div', SeparatorProps>((props, ref) => {
  return <Ariakit.MenuSeparator ref={ref} render={<S.Separator />} {...props} />
})
