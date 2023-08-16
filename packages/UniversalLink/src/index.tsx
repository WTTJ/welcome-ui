import React from 'react'
import {
  CreateWuiPandaProps,
  CreateWuiProps,
  forwardRef,
  forwardRefPanda,
} from '@welcome-ui/system'
import { styled } from '@welcome-ui/panda/jsx'

import * as S from './styles'

export interface UniversalLinkOptions {
  target?: React.HTMLAttributeAnchorTarget
}

export type UniversalLinkProps = CreateWuiProps<'a', UniversalLinkOptions>

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

export type UniversalLinkPandaProps = CreateWuiPandaProps<'a'>

export const UniversalLinkPanda = forwardRefPanda<'a', UniversalLinkPandaProps>(
  ({ as = 'a', target, ...props }, ref) => {
    const Component = styled(as, S.universalLinkStyles)

    return (
      <Component
        ref={ref}
        // for security
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        target={target}
        {...props}
      />
    )
  }
)
