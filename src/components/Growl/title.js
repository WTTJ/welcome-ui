import PropTypes from 'prop-types'
import React from 'react'

import { VARIANTS } from '../../propTypes'

import { Title } from './styles'

export const GrowlTitle = ({ children, variant = 'info' }) => (
  <Title data-testid="growl-title" variant={variant}>
    {children}
  </Title>
)

GrowlTitle.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(VARIANTS)
}
