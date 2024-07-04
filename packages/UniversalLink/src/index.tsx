import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type UniversalLinkProps = CreateWuiProps<'a'>

export const UniversalLink = forwardRef<'a', UniversalLinkProps>(
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
