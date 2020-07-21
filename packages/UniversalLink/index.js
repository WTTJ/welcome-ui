import React, { forwardRef } from 'react'
import { node, string } from 'prop-types'

import * as S from './styles'

export const UniversalLink = forwardRef(({ children, dataTestId, target, ...rest }, ref) => (
  <S.UniversalLink
    color="inherit"
    data-testid={dataTestId}
    ref={ref}
    // for security
    rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    target={target}
    {...rest}
  >
    {children}
  </S.UniversalLink>
))

UniversalLink.displayName = 'UniversalLink'

UniversalLink.propTypes /* remove-proptypes */ = {
  children: node,
  target: string
}
