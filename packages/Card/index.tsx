import React from 'react'
import { CreateWuiProps } from '@welcome-ui/system'

import { Cover } from './Cover'
import * as S from './styles'

export type CardProps = CreateWuiProps<'div'>

export const CardComponent: React.FC<CardProps> = ({ children, ...rest }) => {
  return <S.Card {...rest}>{children}</S.Card>
}

export const Card = Object.assign(CardComponent, {
  Body: S.Body,
  Cover,
})
