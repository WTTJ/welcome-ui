import React from 'react'

import { ExternalLinkIcon } from '@old/Icons'
import type { CreateWuiProps } from '@old/System'
import { forwardRef } from '@old/System'
import type { UniversalLinkOptions } from '@old/UniversalLink'

import * as S from './styles'
import { shouldWrapWithText } from './utils'

export interface LinkOptions {
  disabled?: boolean
  isExternal?: boolean
  variant?: Variant
}

export type LinkProps = CreateWuiProps<'a', LinkOptions & UniversalLinkOptions>
export type WrapWithTextProps = Pick<LinkOptions, 'isExternal'> & {
  children: JSX.Element | React.ReactNode
}

type Variant = 'primary' | 'secondary'

const WrapWithText: React.FC<WrapWithTextProps> = ({ children, isExternal }) => (
  <span className="wui-text">
    {children}
    {isExternal ? <ExternalLinkIcon mb="-2px" ml="sm" size="sm" /> : null}
  </span>
)

export const Link = forwardRef<'a', LinkProps>((props, ref) => {
  const { children, dataTestId, disabled, isExternal, variant = 'primary', ...rest } = props

  const content = shouldWrapWithText(children) ? (
    <WrapWithText isExternal={isExternal}>{children}</WrapWithText>
  ) : (
    React.Children.map(children as JSX.Element, child => {
      if (shouldWrapWithText(child)) {
        return <WrapWithText isExternal={isExternal}>{child}</WrapWithText>
      }
      return child
    })
  )

  return (
    <S.Link
      data-testid={dataTestId}
      disabled={disabled}
      isExternal={isExternal}
      ref={ref}
      variant={variant}
      {...rest}
    >
      {content}
    </S.Link>
  )
})

Link.displayName = 'Link'
