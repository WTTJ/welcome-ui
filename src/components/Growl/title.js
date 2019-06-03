import PropTypes from 'prop-types'
import React from 'react'

import { Title } from './styles'

export const GrowlTitle = ({ children, variant = 'info' }) => (
  <Title variant={variant}>{children}</Title>
)

GrowlTitle.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['warning', 'info', 'error'])
}
