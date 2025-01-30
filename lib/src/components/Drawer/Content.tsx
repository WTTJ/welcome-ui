import React from 'react'

import * as S from './styles'

import { CreateWuiProps, forwardRef } from '@/System'

type ContentProps = CreateWuiProps<'div'>

export const Content = forwardRef<'div', ContentProps>((props, ref) => {
  return <S.Content flex="1" overflowY={{ md: 'auto' }} ref={ref} {...props} />
})
