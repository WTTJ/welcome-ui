import React from 'react'
import { node, oneOf } from 'prop-types'
import { VariantIcon } from '@welcome-ui/variant-icon'

import * as S from './styles'

export const AlertTitle = ({ children, icon, variant, ...rest }) => {
  return (
    <S.Title variant={variant} {...rest}>
      <VariantIcon icon={icon} mr="xs" variant={variant} />
      {children}
    </S.Title>
  )
}

AlertTitle.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  icon: node,
  variant: oneOf(['success', 'error', 'warning', 'info'])
}
