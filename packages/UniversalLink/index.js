/* eslint-disable react/no-multi-comp */
import React, { forwardRef } from 'react'
import { node, string } from 'prop-types'

import * as S from './styled'

export const UniversalLink = forwardRef(({ children, dataTestId, target, ...rest }, ref) => (
  <S.UniversalLink
    color="inherit"
    // for security
    data-testid={dataTestId}
    ref={ref}
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
