import React from 'react'
import { node, oneOf } from 'prop-types'

import { VARIANTS_TYPE } from '../../../src/utils/propTypes'

import * as S from './styles'

export const Title = ({ children, dataTestId, variant = 'info' }) => (
  <S.Title data-testid={dataTestId} variant={variant}>
    {children}
  </S.Title>
)

Title.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  variant: oneOf(VARIANTS_TYPE)
}
