import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { type HTMLStyledProps } from '@welcome-ui/panda/jsx'

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

export type UniversalLinkPandaProps = HTMLStyledProps<'a'>

export const UniversalLinkPanda = React.forwardRef<HTMLAnchorElement, UniversalLinkPandaProps>(
  ({ target, ...props }, ref) => {
    return (
      <S.UniversalLinkPanda
        ref={ref}
        // for security
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        target={target}
        {...props}
      />
    )
  }
)
