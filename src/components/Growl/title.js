import React from 'react'
import { node } from 'prop-types'

import { VARIANTS_TYPE } from '../../utils/propTypes'

import { Title } from './styles'

export const GrowlTitle = ({ children, variant = 'info' }) => (
  <Title data-testid="growl-title" variant={variant}>
    {children}
  </Title>
)

GrowlTitle.propTypes = {
  children: node.isRequired,
  variant: VARIANTS_TYPE
}
