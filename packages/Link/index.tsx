/* eslint-disable react/no-multi-comp */
import React, { Children, cloneElement, useEffect, useRef, useState } from 'react'
import { useTheme } from '@xstyled/styled-components'
import { UniversalLinkOptions } from '@welcome-ui/universal-link'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { ExternalLinkIcon } from '@welcome-ui/icons'

import * as S from './styles'

const isString = (value: unknown): boolean => typeof value === 'string'

export type Variant = 'primary' | 'secondary'

export interface LinkOptions {
  variant?: Variant
  isExternalLink?: boolean
  disabled?: boolean
}
export type LinkProps = CreateWuiProps<'a', LinkOptions & UniversalLinkOptions>

export interface WrapWithTextOptions {
  isExternalLink?: boolean
  key?: string
}
export type WrapWithTextProps = CreateWuiProps<'span', WrapWithTextOptions>

const WrapWithText: React.FC<WrapWithTextProps> = ({ children, isExternalLink, key }) => (
  <span className="wui-text" key={key}>
    {children}
    {isExternalLink && <ExternalLinkIcon mb="-2px" ml="sm" size="sm" />}
  </span>
)

export const Link = forwardRef<'a', LinkProps>((props, ref) => {
  const { children, dataTestId, disabled, isExternalLink, variant = 'primary', ...rest } = props
  const theme = useTheme()
  const linkRef = useRef<HTMLLinkElement>(null)
  const [isChildrenString, setIsChildrenString] = useState(isString(children))

  let clones

  useEffect(() => {
    const innerRef = (ref || linkRef) as React.MutableRefObject<HTMLLinkElement>
    if (innerRef && innerRef.current) {
      setIsChildrenString(innerRef.current.childElementCount === 0)
    }
  }, [linkRef, ref])

  if (!isChildrenString) {
    clones = Children.map(children, (child: React.ReactElement, index) => {
      if (child) {
        const key = `link-child-${index}`
        if (isString(child)) {
          return (
            <WrapWithText isExternalLink={isExternalLink} key={key}>
              {child}
            </WrapWithText>
          )
        }
        return cloneElement(child, {
          color: theme.links.default.color,
          fontWeight: child.props.variant ? undefined : theme.links.default.fontWeight,
          key,
          lineHeight: '1.5',
          ...child.props,
        })
      }
    })
  }

  return (
    <S.Link
      data-testid={dataTestId}
      disabled={disabled}
      isExternalLink={isExternalLink}
      ref={ref || linkRef}
      variant={variant}
      {...rest}
    >
      {isChildrenString && <WrapWithText isExternalLink={isExternalLink}>{children}</WrapWithText>}
      {clones}
    </S.Link>
  )
})

Link.displayName = 'Link'
