/* eslint-disable react/no-multi-comp */
import React, { Children, cloneElement, forwardRef, useEffect, useRef, useState } from 'react'
import { node, oneOf } from 'prop-types'
import { useTheme } from '@xstyled/styled-components'

import * as S from './styles'

const isString = value => typeof value === 'string'

export const Link = forwardRef((props, ref) => {
  const { children, dataTestId, variant = 'primary', ...rest } = props
  let clones
  const theme = useTheme()
  const linkRef = useRef()
  const [isChildrenString, setIsChildrenString] = useState(isString(children))

  const WrapWithText = ({ children, ...rest }) => (
    <span className="wui-text" {...rest}>
      {children}
    </span>
  )

  useEffect(() => {
    const innerRef = ref || linkRef
    if (innerRef && innerRef.current) {
      setIsChildrenString(innerRef.current.childElementCount === 0)
    }
  }, [linkRef, ref])

  if (!isChildrenString) {
    clones = Children.map(children, (child, index) => {
      const key = `link-child-${index}`
      if (isString(child)) {
        return <WrapWithText key={key}>{child}</WrapWithText>
      }
      return cloneElement(child, {
        color: theme.links.default.color,
        fontWeight: child.props.variant ? undefined : theme.links.default.fontWeight,
        key,
        lineHeight: '1.5',
        ...child.props
      })
    })
  }

  return (
    <S.Link data-testid={dataTestId} ref={ref || linkRef} variant={variant} {...rest}>
      {isChildrenString && <WrapWithText>{children}</WrapWithText>}
      {clones}
    </S.Link>
  )
})

Link.displayName = 'Link'

Link.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  variant: oneOf(['primary', 'secondary'])
}
