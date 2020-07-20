import { node } from 'prop-types'
import React from 'react'

import * as S from './styles'
import { Cover } from './Cover'

export const Card = ({ children, ...rest }) => {
  return <S.Card {...rest}>{children}</S.Card>
}

Card.propTypes /* remove-proptypes */ = {
  children: node.isRequired
}

// Nested exports
Card.Body = S.Body
Card.Cover = Cover
