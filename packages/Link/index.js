import React from 'react'
import { node, oneOf } from 'prop-types'

import * as S from './styles'

export const Link = ({ children, variant = 'primary', ...props }) => (
  <S.Link variant={variant} {...props}>
    {children}
  </S.Link>
)

Link.propTypes = {
  children: node.isRequired,
  variant: oneOf(['primary', 'primary-underline-span', 'secondary'])
}
