import React, { forwardRef } from 'react'
import { CrossIcon } from '@welcome-ui/icons.cross'
import { wrapChildren } from '@welcome-ui/utils'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

export type Shape = 'circle' | 'square'
export type Size = 'sm' | 'md' | 'lg'
export type Variant =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | 'dark'
  | 'default'
  | 'error'
  | 'info'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'

export interface TagOptions {
  onRemove?: () => void
  size?: Size
  variant?: Variant
  shape?: Shape
}

export type TagProps = TagOptions & React.HTMLAttributes<HTMLDivElement> & WuiProps

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ children, dataTestId, onRemove, shape, size = 'md', variant = 'default', ...rest }, ref) => {
    const content = wrapChildren(children as JSX.Element)
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
        shape={shape}
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
  }
)

Tag.displayName = 'Tag'

export const StyledTag = S.Tag
