import React from 'react'

import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import * as S from './styles'

type FooterProps = CreateWuiProps<'div'>

export const Footer = forwardRef<'div', FooterProps>((props, ref) => {
  return (
    <S.Footer
      bottom={{ md: 'auto', xs: 0 }}
      position={{ md: 'static', xs: 'sticky' }}
      ref={ref}
      w="100%"
      {...props}
    />
  )
})
