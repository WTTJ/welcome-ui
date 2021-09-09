import React, { forwardRef } from 'react'
import { IconWrapper } from '@welcome-ui/field'
import { ClearButton } from '@welcome-ui/clear-button'
import { createEvent } from '@welcome-ui/utils'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

type Size = 'sm' | 'md' | 'lg'
type Variant = 'error' | 'info' | 'success' | 'valid' | 'warning'

export interface InputTextOptions {
  autoFocus?: boolean
  connected?: boolean
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
  size?: Size
  type?: string
  value?: string
  variant?: Variant
}

export type InputTextProps = InputTextOptions & React.HTMLAttributes<HTMLInputElement> & WuiProps

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      autoFocus,
      connected,
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
      size = 'lg',
      type = 'text',
      value,
      variant,
      ...rest
    },
    ref
  ) => {
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
          connected={connected}
          data-testid={dataTestId}
          disabled={disabled}
          icon={!!icon}
          iconPlacement={iconPlacement}
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
          type={type}
          value={value}
          variant={variant}
          {...rest}
        />
        {icon && (
          <IconWrapper iconPlacement={iconPlacement} size={size}>
            {icon}
          </IconWrapper>
        )}
        {isClearable && value && (
          <IconWrapper iconPlacement="right" size={size}>
            <ClearButton onClick={handleReset} />
          </IconWrapper>
        )}
      </S.Wrapper>
    )
  }
)

InputText.displayName = 'InputText'
