import React from 'react'
import { UniversalLinkOptions } from '@welcome-ui/universal-link'
import { CreateWuiPandaProps, CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { ExternalLinkIcon } from '@welcome-ui/icons'

import * as S from './styles'
import { shouldWrapWithText } from './utils'

export type Variant = 'primary' | 'secondary'

export interface LinkOptions {
  variant?: Variant
  isExternal?: boolean
  disabled?: boolean
}
export type LinkProps = CreateWuiProps<'a', LinkOptions & UniversalLinkOptions>

export type WrapWithTextProps = Pick<LinkOptions, 'isExternal'> & {
  children: React.ReactNode | JSX.Element
}

const WrapWithText: React.FC<WrapWithTextProps> = ({ children, isExternal }) => (
  <span className="wui-text">
    {children}
    {isExternal && <ExternalLinkIcon mb="-2px" ml="sm" size="sm" />}
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

export type LinkPandaOptions = S.LinkPandaVariant & { isExternal?: boolean }
export type LinkPandaProps = CreateWuiPandaProps<'a', LinkPandaOptions>

export const LinkPanda = React.forwardRef<HTMLAnchorElement, LinkPandaProps>((props, ref) => {
  const { children, disabled, isExternal, variant = 'primary', ...rest } = props

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
    <S.LinkPanda
      data-external={isExternal}
      disabled={disabled}
      variant={variant}
      {...rest}
      ref={ref}
    >
      {content}
    </S.LinkPanda>
  )
})

export const linkStyle = S.linkStyles
