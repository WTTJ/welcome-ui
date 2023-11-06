import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

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
