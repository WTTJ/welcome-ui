import React from 'react'
import { WuiProps } from '@welcome-ui/system'

import { Cover } from './Cover'
import * as S from './styles'

export type CardProps = WuiProps

export const CardComponent: React.FC<CardProps> = ({ children, ...rest }) => {
  return <S.Card {...rest}>{children}</S.Card>
}

export const Card = Object.assign(CardComponent, {
  Body: S.Body,
  Cover
})
