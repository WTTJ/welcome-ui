import React from 'react'
import { node } from 'prop-types'

import { VARIANTS_TYPE } from '../../utils'

import { Title } from './styles'

export const GrowlTitle = ({ children, dataTestId, variant = 'info' }) => (
  <Title data-testid={dataTestId} variant={variant}>
    {children}
  </Title>
)

GrowlTitle.propTypes = {
  children: node.isRequired,
  variant: VARIANTS_TYPE
}
