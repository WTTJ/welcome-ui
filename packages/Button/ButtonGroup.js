import { bool, node, oneOf } from 'prop-types'
import React, { Children, cloneElement } from 'react'

import * as S from './styles'

export const ButtonGroup = ({ children, disabled, size, variant }) => {
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

  return <S.ButtonGroup>{setGlobalProps(children)}</S.ButtonGroup>
}

ButtonGroup.propTypes = {
  children: node.isRequired,
  disabled: bool,
  size: oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  variant: oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'primary-warning',
    'secondary-warning',
    'primary-danger',
    'secondary-danger'
  ])
}
