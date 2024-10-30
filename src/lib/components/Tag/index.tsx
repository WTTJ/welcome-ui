import * as React from 'react'

type TagSize = 'xs' | 'sm' | 'md'
type TagVariant = keyof typeof SecondaryColors | 'default' | 'primary'

export type TagOptions = {
  href?: string
  onClick?: () => void
  onRemove?: () => void
  size?: TagSize
  to?: string
  variant?: TagVariant
}

import { SecondaryColors } from '../../theme'
import { CreateWuiProps, forwardRef } from '../../utils'

import * as S from './styles'

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
    {
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
          {children}
          {!!onRemove && (
            <S.ActionIcon size={size}>
              <S.Button onClick={onRemove} title="Remove" type="button">
                x
              </S.Button>
            </S.ActionIcon>
          )}
        </S.Tag>
      )
    }
  }
)
