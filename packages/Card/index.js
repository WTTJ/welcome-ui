/* eslint-disable react/no-multi-comp */
import { node, string } from 'prop-types'
import React from 'react'

import * as S from './styles'

export function Card({ children, ...rest }) {
  return <S.Card {...rest}>{children}</S.Card>
}

Card.propTypes /* remove-proptypes */ = {
  children: node.isRequired
}

export function Cover({ src, ...rest }) {
  return (
    <S.Cover {...rest}>
      <img src={src} />
    </S.Cover>
  )
}

Cover.propTypes /* remove-proptypes */ = {
  src: string.isRequired
}

Card.Body = S.Body
Card.Cover = Cover
