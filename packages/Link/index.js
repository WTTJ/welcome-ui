/* eslint-disable react/no-multi-comp */
import React, { Children, cloneElement, forwardRef, useEffect, useRef, useState } from 'react'
import { node, oneOf } from 'prop-types'

import * as S from './styles'

const isString = value => typeof value === 'string'

export const Link = forwardRef(({ children, variant = 'primary', ...props }, ref) => {
  let clones
  const linkRef = useRef()
  const [isChildrenString, setIsChildrenString] = useState(isString(children))

  const WrapWithText = ({ children, ...props }) => (
    <span className="wui-text" {...props}>
      {children}
    </span>
  )

  if (!isChildrenString) {
    clones = Children.map(children, (child, index) => {
      const key = `link-child-${index}`
      if (isString(child)) {
        return <WrapWithText key={key}>{child}</WrapWithText>
      }
      return cloneElement(child, { key })
    })
  }

  useEffect(() => {
    const innerRef = ref || linkRef
    if (innerRef) {
      setIsChildrenString(innerRef.current.childElementCount === 0)
    }
  }, [linkRef, ref])

  return (
    <S.Link ref={ref || linkRef} variant={variant} {...props}>
      {isChildrenString && <WrapWithText>{children}</WrapWithText>}
      {clones}
    </S.Link>
  )
})

Link.displayName = 'Link'

Link.propTypes = {
  children: node.isRequired,
  variant: oneOf(['primary', 'secondary'])
}
