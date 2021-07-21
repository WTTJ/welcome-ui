import React from 'react'
import { WuiProps } from '@welcome-ui/system'

import { Cover } from './Cover'
import * as S from './styles'

export const CardComponent: React.FC<WuiProps> = ({ children, ...rest }) => {
  return <S.Card {...rest}>{children}</S.Card>
}

export const Card = Object.assign(CardComponent, {
  Body: S.Body,
  Cover
})
