import { ThemeSecondaryColors } from '@welcome-ui/core'
import { CrossIcon } from '@welcome-ui/icons'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { Variant as VariantUtils, wrapChildren } from '@welcome-ui/utils'
import React from 'react'

import * as S from './styles'

export type Size = 'xs' | 'sm' | 'md'
export type Variant = ThemeSecondaryColors | VariantUtils | 'default'

export interface TagOptions {
  href?: string
  onClick?: () => void
  onRemove?: () => void
  size?: Size
  to?: string
  variant?: Variant
}

export type TagProps = CreateWuiProps<'div', TagOptions>

export const Tag = forwardRef<'div', TagProps>(
  (
    {
      as,
      children,
      dataTestId,
      href,
      onClick,
      onRemove,
      size = 'md',
      to,
      variant = 'default',
      ...rest
    },
    ref
  ) => {
    const content = wrapChildren(children as JSX.Element)
    // get size children for int and string
    const hasIntOrStringChildren =
      !!(children || children === 0) && ['number', 'string'].includes(typeof children)
    const childrenLength = hasIntOrStringChildren ? children.toString().length : undefined
    const hasLink = !!href || !!to

    return (
      <S.Tag
        as={as}
        data-testid={dataTestId}
        hasClickAction={!!onClick}
        hasLink={hasLink}
        hasRemoveAction={!!onRemove}
        href={href}
        length={childrenLength}
        onClick={onClick}
        ref={ref}
        size={size}
        to={to}
        variant={variant}
        {...rest}
      >
        {content}
        {!!onRemove && (
          <S.ActionIcon size={size}>
            <S.Button onClick={onRemove} title="Remove" type="button">
              <CrossIcon size="xs" title="Remove" />
            </S.Button>
          </S.ActionIcon>
        )}
      </S.Tag>
    )
  }
)

Tag.displayName = 'Tag'

export const StyledTag = S.Tag
