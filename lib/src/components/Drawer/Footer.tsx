import React from 'react'

import * as S from './styles'

import { CreateWuiProps, forwardRef } from '@/System'

type FooterProps = CreateWuiProps<'div'>

export const Footer = forwardRef<'div', FooterProps>((props, ref) => {
  return (
    <S.Footer
      bottom={{ xs: 0, md: 'auto' }}
      position={{ xs: 'sticky', md: 'static' }}
      ref={ref}
      w="100%"
      {...props}
    />
  )
})
