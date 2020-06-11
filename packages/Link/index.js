/* eslint-disable react/no-multi-comp */
import React, { cloneElement } from 'react'
import { node, oneOf } from 'prop-types'

import * as S from './styles'

const isString = value => typeof value === 'string'

export const Link = ({ children, variant = 'primary', ...props }) => {
  let clones
  const isChildrenString = isString(children)

  const WrapWithText = ({ children, ...props }) => (
    <span className="wui-text" {...props}>
      {children}
    </span>
  )

  if (!isChildrenString) {
    clones = children.map((child, index) => {
      const key = `link-child-${index}`
      if (isString(child)) {
        return <WrapWithText key={key}>{child}</WrapWithText>
      }
      return cloneElement(child, { key })
    })
  }

  return (
    <S.Link variant={variant} {...props}>
      {isChildrenString && <WrapWithText>{children}</WrapWithText>}
      {clones}
    </S.Link>
  )
}

Link.propTypes = {
  children: node.isRequired,
  variant: oneOf(['primary', 'secondary'])
}
