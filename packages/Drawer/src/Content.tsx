import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

type ContentProps = CreateWuiProps<'div'>

export const Content = forwardRef<'div', ContentProps>((props, ref) => {
  return <S.Content flex="1" overflowY={{ md: 'auto' }} ref={ref} {...props} />
})
