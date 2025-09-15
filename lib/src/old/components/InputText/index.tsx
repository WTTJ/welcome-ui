import React from 'react'

import { Box } from '@old/Box'
import { ClearButton } from '@old/ClearButton'
import { IconGroupWrapper, IconWrapper } from '@old/Field'
import type { CreateWuiProps } from '@old/System'
import { forwardRef } from '@old/System'
import type { DefaultFieldStylesProps } from '@old/utils'
import { createEvent, FIELD_ICON_SIZE } from '@old/utils'

import * as S from './styles'

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
      <Box position="relative">
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
        {hasIcon && !hasClearButtonAndRightIcon ? (
          <IconWrapper iconPlacement={iconPlacement} size={iconSize}>
            {React.cloneElement(icon, { ...icon.props, size: iconSize })}
          </IconWrapper>
        ) : null}
        {isClearable ? (
          <IconGroupWrapper size={iconSize}>
            {value ? <ClearButton onClick={handleReset} /> : null}
            {iconPlacement === 'right' &&
              React.cloneElement(icon, { ...icon.props, size: iconSize })}
          </IconGroupWrapper>
        ) : null}
      </Box>
    )
  }
)

InputText.displayName = 'InputText'
