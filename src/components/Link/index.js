import React, { forwardRef } from 'react'
import { node, oneOf, string } from 'prop-types'

import * as S from './styles'

export const Link = forwardRef(
  ({ children, dataTestId, target, variant = 'primary', ...rest }, ref) => (
    <S.Link
      data-testid={dataTestId}
      ref={ref}
      // for security
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      target={target}
      variant={variant}
      {...rest}
    >
      {children}
    </S.Link>
  )
)

Link.displayName = 'Link'
Link.propTypes = {
  children: node,
  dataTestId: string,
  target: string,
  testId: string,
  variant: oneOf(['primary', 'secondary'])
}
