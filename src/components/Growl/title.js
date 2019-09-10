import React from 'react'
import { node, string } from 'prop-types'

import { VARIANTS_TYPE } from '../../utils'

import { Title } from './styles'

export const GrowlTitle = ({ children, testId, variant = 'info' }) => (
  <Title data-testid={testId} variant={variant}>
    {children}
  </Title>
)

GrowlTitle.propTypes = {
  children: node.isRequired,
  testId: string,
  variant: VARIANTS_TYPE
}
