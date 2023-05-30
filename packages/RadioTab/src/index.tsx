import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { DefaultFieldStylesProps } from '@welcome-ui/utils'
import { RadioProps } from 'reakit'

import * as S from './styles'

export interface RadioTabsOptions extends DefaultFieldStylesProps {
  checked?: boolean
  disabled?: boolean
  disabledIcon?: React.ReactElement
  label: React.ReactElement
  onChange?: (event: React.MouseEvent<HTMLLabelElement>) => void
  onClick?: (event: React.MouseEvent<HTMLLabelElement>) => void
}

export type RadioTabsProps = CreateWuiProps<
  'input',
  RadioTabsOptions & Omit<RadioProps, keyof RadioTabsOptions>
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
    size = 'md',
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
