import React from 'react'
import { node, oneOf } from 'prop-types'

import { VARIANTS_TYPE } from '../Core/utils/propTypes'

import { Title } from './styles'

export const GrowlTitle = ({ children, dataTestId, variant = 'info' }) => (
  <Title data-testid={dataTestId} variant={variant}>
    {children}
  </Title>
)

GrowlTitle.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  variant: oneOf(VARIANTS_TYPE)
}
