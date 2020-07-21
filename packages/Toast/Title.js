import React from 'react'
import { node, oneOf } from 'prop-types'
import { VariantIcon } from '@welcome-ui/variant-icon'

import { VARIANTS_TYPE } from '../../utils/propTypes'

import * as S from './styles'

export const Title = ({ children, icon, variant = 'info', ...rest }) => (
  <S.Title variant={variant} {...rest}>
    <VariantIcon icon={icon} variant={variant} />
    {children}
  </S.Title>
)

Title.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  icon: node,
  variant: oneOf(VARIANTS_TYPE)
}
