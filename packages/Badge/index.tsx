import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { wrapChildren } from '@welcome-ui/utils'

import * as S from './styles'

export type Shape = 'circle' | 'square'
export type Size = 'sm' | 'md'
export type Variant = 'default' | 'primary' | 'disabled'

export interface BadgeOptions {
  disabled?: boolean
  variant?: Variant
  size?: Size
  shape?: Shape
}
export type BadgeProps = CreateWuiProps<'div', BadgeOptions>

/**
 * @tag badge
 */
export const Badge = forwardRef<'div', BadgeProps>(
  (
    {
      children,
      dataTestId,
      disabled = false,
      shape = 'circle',
      size = 'md',
      variant = 'default',
      ...rest
    },
    ref
  ) => {
    const content = wrapChildren(children as JSX.Element)
    // get size children for int and string
    const childrenLength =
      !!(children || children === 0) &&
      ['number', 'string'].includes(typeof children) &&
      children.toString().length

    return (
      <S.Badge
        data-testid={dataTestId}
        disabled={disabled}
        length={childrenLength}
        ref={ref}
        shape={shape}
        size={size}
        variant={variant}
        {...rest}
      >
        {content}
      </S.Badge>
    )
  }
)

Badge.displayName = 'Badge'

export const StyledTag = S.Badge
