import React, { forwardRef } from 'react'
import { func, node, oneOf, string } from 'prop-types'

import { Icon } from '../Icon'
import { SHAPES_TYPE, SIZES_TYPE, wrap } from '../../utils'

import * as S from './styles'

export const Tag = forwardRef(
  ({ children, onRemove, size = 'md', testId, variant = 'default', ...rest }, ref) => {
    const content = wrap(children)
    return (
      <S.Tag
        data-testid={testId}
        length={children ? children.length : null}
        ref={ref}
        role="listitem"
        size={size}
        variant={variant}
        {...rest}
      >
        {content}
        {onRemove && <Icon name="cross" onClick={onRemove} size="xs" title="Remove" />}
      </S.Tag>
    )
  }
)

Tag.displayName = 'Tag'

Tag.propTypes = {
  children: node,
  onRemove: func,
  shape: SHAPES_TYPE,
  size: SIZES_TYPE,
  testId: string,
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
