import React, { forwardRef } from 'react'
import { func, node, oneOf } from 'prop-types'

import { Icon } from '../Icon'
import { SHAPES_TYPE, SIZES_TYPE } from '../../utils/propTypes'
import { wrap } from '../../utils/react'

import * as S from './styles'

export const Tag = forwardRef(
  ({ children, dataTestId, onRemove, size = 'md', variant = 'default', ...rest }, ref) => {
    const content = wrap(children)
    // get size children for int and string
    const childrenLength =
      !!(children || children === 0) &&
      ['number', 'string'].includes(typeof children) &&
      children.toString().length

    return (
      <S.Tag
        data-testid={dataTestId}
        hasAction={!!onRemove}
        length={childrenLength}
        ref={ref}
        role="listitem"
        size={size}
        variant={variant}
        {...rest}
      >
        {content}
        {!!onRemove && (
          <S.ActionIcon size={size}>
            <Icon name="cross" onClick={onRemove} size="xs" title="Remove" />
          </S.ActionIcon>
        )}
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
