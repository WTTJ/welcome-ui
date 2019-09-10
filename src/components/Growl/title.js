import React from 'react'
import { node, string } from 'prop-types'

import { VARIANTS_TYPE } from '../../utils'

import { Title } from './styles'

export const GrowlTitle = ({ children, dataTestId, variant = 'info' }) => (
  <Title data-testid={dataTestId} variant={variant}>
    {children}
  </Title>
)

GrowlTitle.propTypes = {
  children: node.isRequired,
  dataTestId: string,
  variant: VARIANTS_TYPE
}
