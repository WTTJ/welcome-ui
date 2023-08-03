import React from 'react'
import { BoxProps } from '@welcome-ui/box'

import * as S from './styles'

export const Content: React.FC<BoxProps> = props => {
  return <S.Content flex="1" overflowY={{ md: 'auto' }} {...props} />
}
