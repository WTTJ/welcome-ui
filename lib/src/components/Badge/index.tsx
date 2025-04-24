import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import * as S from './styles'

export type BadgeOptions = {
  children: number | React.ReactElement | string
  disabled?: boolean
  size?: 'md' | 'sm'
  variant?: 'default' | 'primary'
  // if a number is higher than 99, we replace this number by 99+
  withNumberAbbreviation?: boolean
}
export type BadgeProps = CreateWuiProps<'div', BadgeOptions>

export const Badge = forwardRef<'div', BadgeProps>(
  (
    {
      children,
      dataTestId,
      disabled,
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
