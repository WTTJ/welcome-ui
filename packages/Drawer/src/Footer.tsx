import React from 'react'
import { BoxProps } from '@welcome-ui/box'

import * as S from './styles'

export const Footer: React.FC<BoxProps> = props => {
  return (
    <S.Footer
      bottom={{ xs: 0, md: 'auto' }}
      position={{ xs: 'sticky', md: 'static' }}
      w="100%"
      {...props}
    />
  )
}
