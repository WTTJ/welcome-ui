import React, { forwardRef } from 'react'
import { node, oneOf, string } from 'prop-types'

import * as S from './styles'

export const Link = forwardRef(
  ({ children, target, testId, variant = 'primary', ...rest }, ref) => (
    <S.Link
      data-testid={testId}
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
  target: string,
  testId: string,
  variant: oneOf(['primary', 'secondary'])
}
