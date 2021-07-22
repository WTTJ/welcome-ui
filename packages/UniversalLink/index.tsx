import React, { forwardRef } from 'react'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

export interface UniversalLinkProps extends React.HTMLAttributes<HTMLLinkElement> {
  target?: string
}

export const UniversalLink = forwardRef<HTMLLinkElement, UniversalLinkProps & WuiProps>(
  ({ children, dataTestId, target, ...rest }, ref) => (
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
  )
)

UniversalLink.displayName = 'UniversalLink'
