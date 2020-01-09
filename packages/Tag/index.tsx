import React, { forwardRef, ReactNode } from 'react'
import { func, node, oneOf } from 'prop-types'
import { CrossIcon } from '@welcome-ui/icons.cross'
import { wrapChildren } from '@welcome-ui/utils'

import { SHAPES_TYPE, SIZES_TYPE } from '../../src/utils/propTypes'

import * as S from './styles'

const VARIANTS = [
  'dark',
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
] as const

export interface Props {
  children?: ReactNode
  dataTestId?: string
  onRemove?(e: InputEvent): void
  shape?: typeof SHAPES_TYPE[number]
  size?: typeof SIZES_TYPE[number]
  variant?: typeof VARIANTS[number]
}

export const Tag = forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, dataTestId, onRemove, size = 'md', variant = 'default', ...rest } = props
  const content = wrapChildren(children)
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
          <CrossIcon onClick={onRemove} size="xs" title="Remove" />
        </S.ActionIcon>
      )}
    </S.Tag>
  )
})

Tag.displayName = 'Tag'

Tag.propTypes /* remove-proptypes */ = {
  children: node,
  onRemove: func,
  shape: oneOf(SHAPES_TYPE),
  size: oneOf(SIZES_TYPE),
  variant: oneOf(VARIANTS)
}

export const StyledTag = S.Tag
