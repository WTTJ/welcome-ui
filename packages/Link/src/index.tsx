import React from 'react'
import { UniversalLinkOptions, UniversalLinkPanda } from '@welcome-ui/universal-link'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { ExternalLinkIcon, ExternalLinkIconPanda } from '@welcome-ui/icons'
import { type HTMLStyledProps, styled } from '@welcome-ui/panda/jsx'
import { link, type LinkVariantProps } from '@welcome-ui/panda/recipes'

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

const WrapWithTextPanda: React.FC<WrapWithTextProps> = ({ children, isExternal }) => (
  <span className="wui-text">
    {children}
    {isExternal && <ExternalLinkIconPanda mb="-2px" ml="sm" size="sm" />}
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

export type LinkPandaOptions = LinkVariantProps & { isExternal?: boolean }
export type LinkPandaProps = HTMLStyledProps<'a'> & LinkPandaOptions

const StyledLinkPanda = styled(UniversalLinkPanda, link)

export const LinkPanda = React.forwardRef<HTMLAnchorElement, LinkPandaProps>(
  ({ children, disabled, isExternal, variant = 'primary', ...rest }, ref) => {
    const content = shouldWrapWithText(children) ? (
      <WrapWithTextPanda isExternal={isExternal}>{children}</WrapWithTextPanda>
    ) : (
      React.Children.map(children as JSX.Element, child => {
        if (shouldWrapWithText(child)) {
          return <WrapWithTextPanda isExternal={isExternal}>{child}</WrapWithTextPanda>
        }
        return child
      })
    )

    return (
      <StyledLinkPanda
        data-external={isExternal}
        disabled={disabled}
        variant={variant}
        {...rest}
        ref={ref}
      >
        {content}
      </StyledLinkPanda>
    )
  }
)
