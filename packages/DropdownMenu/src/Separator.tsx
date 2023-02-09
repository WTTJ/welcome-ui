import React from 'react'
import { MenuSeparator, MenuSeparatorProps } from 'reakit/Menu'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './Separator.styled'

export type SeparatorProps = CreateWuiProps<'div', MenuSeparatorProps>

export const Separator = forwardRef<'div', SeparatorProps>((props, ref) => {
  return <MenuSeparator as={S.Separator} ref={ref} {...props} />
})
