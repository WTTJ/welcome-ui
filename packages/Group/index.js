import { bool, node, string } from 'prop-types'
import React, { Children, cloneElement } from 'react'

import * as S from './styles'

export const Group = ({ children, dataTestId, disabled, size, variant }) => {
  function setGlobalProps(children) {
    return Children.map(children, child => {
      return cloneElement(child, {
        ...child.props,
        disabled: disabled || child.props.disabled,
        size: size || child.props.size,
        variant: variant || child.props.variant
      })
    })
  }

  return <S.Group data-testid={dataTestId}>{setGlobalProps(children)}</S.Group>
}

Group.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  /** Disable all your child components */
  disabled: bool,
  /** Refer to your child components docs */
  size: string,
  /** Refer to your child components docs */
  variant: string
}
