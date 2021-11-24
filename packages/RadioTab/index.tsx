import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { RadioProps } from 'reakit/Radio'

import * as S from './styles'

export type Size = 'sm' | 'md' | 'lg'
export type Variant = 'error' | 'warning' | 'info' | 'success'

export interface RadioTabsOptions {
  checked?: boolean
  disabled?: boolean
  disabledIcon?: React.ReactElement
  label: React.ReactElement
  onChange?: (event: React.MouseEvent<HTMLLabelElement>) => void
  onClick?: (event: React.MouseEvent<HTMLLabelElement>) => void
  size?: Size
  variant?: Variant
}

export type RadioTabsProps = CreateWuiProps<
  'input',
  RadioTabsOptions & Omit<RadioProps, 'onChange' | 'onClick'>
>

export const RadioTab = forwardRef<'input', RadioTabsProps>((props, ref) => {
  const {
    checked,
    dataTestId,
    disabled,
    disabledIcon,
    flexDirection,
    label,
    onChange,
    onClick,
    size = 'lg',
    variant,
    ...radioProps
  } = props

  const handleClick = (event: React.MouseEvent<HTMLLabelElement>) => {
    event.stopPropagation()
    onClick && onClick(event)
    onChange && onChange(event)
  }

  return (
    <S.Label
      checked={checked}
      disabled={disabled}
      disabledIcon={disabledIcon}
      flexDirection={flexDirection}
      onClick={handleClick}
      size={size}
      variant={variant}
    >
      <S.Input>
        <S.Radio
          data-testid={dataTestId}
          disabled={disabled}
          label={label}
          ref={ref}
          variant={variant}
          {...radioProps}
        />
      </S.Input>
      <S.Content>{label}</S.Content>
    </S.Label>
  )
})

RadioTab.displayName = 'RadioTab'
