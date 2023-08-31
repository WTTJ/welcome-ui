import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { type HTMLStyledProps, styled } from '@welcome-ui/panda/jsx'
import { badge, type BadgeVariantProps } from '@welcome-ui/panda/recipes'

import * as S from './styles'

export type BadgeOptions = {
  disabled?: boolean
  shape?: 'circle' | 'square'
  size?: 'sm' | 'md'
  variant?: 'default' | 'primary'
  // if a number is higher than 99, we replace this number by 99+
  withNumberAbbreviation?: boolean
  children: string | number
}
export type BadgeProps = CreateWuiProps<'div', BadgeOptions>

export const Badge = forwardRef<'div', BadgeProps>(
  (
    {
      children,
      dataTestId,
      disabled,
      shape = 'circle',
      size = 'md',
      variant = 'default',
      withNumberAbbreviation,
      ...rest
    },
    ref
  ) => {
    let text
    const isNumber = Number.isInteger(children)
    const textLength = children.toString().length

    if (isNumber) {
      if (withNumberAbbreviation && (children as number) > 99) {
        text = '99+'
      } else {
        text = children
      }
    } else {
      text = children
    }

    return (
      <S.Badge
        data-testid={dataTestId}
        disabled={disabled}
        length={textLength}
        ref={ref}
        shape={shape}
        size={size}
        variant={variant}
        {...rest}
      >
        {text}
      </S.Badge>
    )
  }
)

Badge.displayName = 'Badge'

export type BadgePandaOptions = BadgeVariantProps & Pick<BadgeOptions, 'withNumberAbbreviation'>
export type BadgePandaProps = HTMLStyledProps<'div'> & BadgePandaOptions

const StyledBadgePanda = styled('div', badge)

export const BadgePanda = React.forwardRef<HTMLDivElement, BadgePandaProps>(
  ({ children, disabled, withNumberAbbreviation, ...rest }, ref) => {
    let text
    const isNumber = Number.isInteger(children)
    const textLength = children.toString().length

    if (isNumber) {
      if (withNumberAbbreviation && (children as number) > 99) {
        text = '99+'
      } else {
        text = children
      }
    } else {
      text = children
    }

    return (
      <StyledBadgePanda
        aria-disabled={disabled as boolean}
        data-disabled={disabled}
        data-length={textLength}
        ref={ref}
        {...rest}
      >
        {text}
      </StyledBadgePanda>
    )
  }
)
