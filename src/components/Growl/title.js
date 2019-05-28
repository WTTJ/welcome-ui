import { node, oneOf } from 'prop-types'
import React from 'react'

import { Title } from './styles'

export const GrowlTitle = ({ children, variant = 'info' }) => (
  <Title variant={variant}>{children}</Title>
)

GrowlTitle.propTypes = {
  children: node.isRequired,
  variant: oneOf(['warning', 'info', 'error'])
}
