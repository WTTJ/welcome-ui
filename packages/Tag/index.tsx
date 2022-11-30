import React from 'react'
import { wrapChildren } from '@welcome-ui/utils'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { CrossIcon } from '@welcome-ui/icons'

import * as S from './styles'

export type Size = 'xs' | 'sm' | 'md'
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
  onClick?: () => void
  onRemove?: () => void
  size?: Size
  variant?: Variant
}

export type TagProps = CreateWuiProps<'div', TagOptions>

export const Tag = forwardRef<'div', TagProps>(
  (
    { as, children, dataTestId, onClick, onRemove, size = 'md', variant = 'default', ...rest },
    ref
  ) => {
    const content = wrapChildren(children as JSX.Element)
    // get size children for int and string
    const childrenLength =
      !!(children || children === 0) &&
      ['number', 'string'].includes(typeof children) &&
      children.toString().length
    const hasLink = as === 'a'

    return (
      <S.Tag
        as={as}
        data-testid={dataTestId}
        hasClickAction={!!onClick}
        hasLink={hasLink}
        hasRemoveAction={!!onRemove}
        length={childrenLength}
        onClick={onClick}
        ref={ref}
        role="listitem"
        size={size}
        variant={variant}
        {...rest}
      >
        {content}
        {!!onRemove && (
          <S.ActionIcon size={size}>
            <S.Button onClick={onRemove} title="Remove">
              <CrossIcon onClick={onRemove} size="xs" title="Remove" />
            </S.Button>
          </S.ActionIcon>
        )}
      </S.Tag>
    )
  }
)

Tag.displayName = 'Tag'

export const StyledTag = S.Tag
