/* eslint-disable react/no-multi-comp */
import React, { Children, cloneElement, useEffect, useRef, useState } from 'react'
import { useTheme } from '@xstyled/styled-components'
import { UniversalLinkOptions } from '@welcome-ui/universal-link'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

const isString = (value: unknown): boolean => typeof value === 'string'

export type Variant = 'primary' | 'secondary'

export interface LinkOptions {
  variant?: Variant
}

export type LinkProps = CreateWuiProps<'a', LinkOptions & UniversalLinkOptions>

const WrapWithText: React.FC = ({ children, ...rest }) => (
  <span className="wui-text" {...rest}>
    {children}
  </span>
)

export const Link = forwardRef<'a', LinkProps>(
  ({ children, dataTestId, variant = 'primary', ...rest }, ref) => {
    let clones
    const theme = useTheme()
    const linkRef = useRef<HTMLLinkElement>(null)
    const [isChildrenString, setIsChildrenString] = useState(isString(children))

    useEffect(() => {
      const innerRef = (ref || linkRef) as React.MutableRefObject<HTMLLinkElement>
      if (innerRef && innerRef.current) {
        setIsChildrenString(innerRef.current.childElementCount === 0)
      }
    }, [linkRef, ref])

    if (!isChildrenString) {
      clones = Children.map(children, (child: React.ReactElement, index) => {
        const key = `link-child-${index}`
        if (isString(child)) {
          return <WrapWithText key={key}>{child}</WrapWithText>
        }
        return cloneElement(child, {
          color: theme.links.default.color,
          fontWeight: child.props.variant ? undefined : theme.links.default.fontWeight,
          key,
          lineHeight: '1.5',
          ...child.props,
        })
      })
    }

    return (
      <S.Link data-testid={dataTestId} ref={ref || linkRef} variant={variant} {...rest}>
        {isChildrenString && <WrapWithText>{children}</WrapWithText>}
        {clones}
      </S.Link>
    )
  }
)

Link.displayName = 'Link'
