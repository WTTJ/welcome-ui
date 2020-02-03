import React from 'react'
import { node, oneOf } from 'prop-types'

import { VARIANTS_TYPE } from '../../../src/utils/propTypes'

import { Title as StyledTitle } from './styles'

export const Title = ({ children, dataTestId, variant = 'info' }) => (
  <StyledTitle data-testid={dataTestId} variant={variant}>
    {children}
  </StyledTitle>
)

Title.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  variant: oneOf(VARIANTS_TYPE)
}
