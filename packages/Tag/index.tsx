import React, { forwardRef } from 'react'
import { CrossIcon } from '@welcome-ui/icons.cross'
import { wrapChildren } from '@welcome-ui/utils'
import { SystemProps } from '@xstyled/system'

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

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  dataTestId?: string
  onRemove?: () => void
  size?: Size
  variant?: Variant
  shape?: Shape
}

export const Tag = forwardRef<HTMLDivElement, TagProps & SystemProps>(
  ({ children, dataTestId, onRemove, size = 'md', variant = 'default', shape, ...rest }, ref) => {
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
        shape={shape}
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
