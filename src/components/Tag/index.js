import React, { forwardRef } from 'react'
import { func, node, oneOf } from 'prop-types'

import { Icon } from '../Icon'

import { SHAPES } from '../../propTypes'

import * as S from './styles'

export const Tag = forwardRef(
  ({ children, onRemove, size = 'md', variant = 'default', ...rest }, ref) => {
    const handleClick = () => {
      onRemove(rest['data-id'])
    }

    return (
      <S.Tag
        data-testid="tag"
        length={children ? children.length : null}
        ref={ref}
        size={size}
        variant={variant}
        {...rest}
      >
        {children}
        {onRemove && <Icon ml="sm" name="cross" onClick={handleClick} size="xs" />}
      </S.Tag>
    )
  }
)

Tag.displayName = 'Tag'

Tag.propTypes = {
  children: node,
  onRemove: func,
  shape: oneOf(SHAPES),
  size: oneOf(['sm', 'md', 'lg']),
  variant: oneOf([
    'blue',
    'default',
    'error',
    'green',
    'info',
    'orange',
    'pink',
    'primary',
    'purple',
    'red',
    'secondary',
    'turquoize',
    'warning',
    'yellow'
  ])
}
