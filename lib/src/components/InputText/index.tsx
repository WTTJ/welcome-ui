import React from 'react'

import { DefaultFieldStylesProps, FIELD_ICON_SIZE } from '../../utils/field-styles'
import { createEvent } from '../../utils/create-event'

import * as S from './styles'

import { CreateWuiProps, forwardRef } from '@/System'
import { ClearButton } from '@/ClearButton'
import { IconGroupWrapper, IconWrapper } from '@/Field'

export interface InputTextOptions extends DefaultFieldStylesProps {
  autoFocus?: boolean
  disabled?: boolean
  icon?: JSX.Element
  iconPlacement?: 'left' | 'right'
  isClearable?: boolean
  name?: string
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
  transparent?: boolean
  type?: string
  value?: string
}

export type InputTextProps = CreateWuiProps<'input', InputTextOptions>

export const InputText = forwardRef<'input', InputTextProps>(
  (
    {
      autoFocus,
      dataTestId,
      disabled,
      icon,
      iconPlacement = 'left',
      isClearable,
      name,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      placeholder,
      size = 'md',
      transparent,
      type = 'text',
      value,
      variant,
      ...rest
    },
    ref
  ) => {
    const hasClearButtonAndRightIcon = isClearable && iconPlacement === 'right'
    const hasIcon = icon && iconPlacement
    const iconSize = FIELD_ICON_SIZE[size]

    const handleReset = () => {
      const event = createEvent({
        name,
        value: '',
      }) as unknown as React.ChangeEvent<HTMLInputElement>
      onChange && onChange(event)
    }

    return (
      <S.Wrapper>
        <S.InputText
          autoFocus={autoFocus}
          data-testid={dataTestId}
          disabled={disabled}
          iconPlacement={!!icon && iconPlacement}
          id={name}
          isClearable={isClearable}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          ref={ref}
          size={size}
          transparent={transparent}
          type={type}
          value={value}
          variant={variant}
          {...rest}
        />
        {hasIcon && !hasClearButtonAndRightIcon && (
          <IconWrapper iconPlacement={iconPlacement} size={iconSize}>
            {React.cloneElement(icon, { ...icon.props, size: iconSize })}
          </IconWrapper>
        )}
        {isClearable && (
          <IconGroupWrapper size={iconSize}>
            {value && <ClearButton onClick={handleReset} />}
            {iconPlacement === 'right' &&
              React.cloneElement(icon, { ...icon.props, size: iconSize })}
          </IconGroupWrapper>
        )}
      </S.Wrapper>
    )
  }
)

InputText.displayName = 'InputText'
