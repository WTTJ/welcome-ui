import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { DefaultFieldStylesProps } from '@welcome-ui/utils'

import * as S from './styles'

export interface TextareaOptions extends DefaultFieldStylesProps {
  autoFocus?: boolean
  disabled?: boolean
  maxLength?: number
  minRows?: number
  name?: string
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  value?: string
}

export type TextareaProps = CreateWuiProps<'textarea', TextareaOptions>

export const Textarea = forwardRef<'textarea', TextareaProps>(
  (
    {
      autoFocus,
      dataTestId,
      disabled,
      maxLength,
      minRows = 5,
      name,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      placeholder,
      size = 'md',
      value,
      variant,
      ...rest
    },
    ref
  ) => (
    <S.Textarea
      autoFocus={autoFocus}
      data-testid={dataTestId}
      disabled={disabled}
      maxLength={maxLength}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      ref={ref}
      rows={minRows}
      size={size}
      value={value}
      variant={variant}
      {...rest}
    />
  )
)

Textarea.displayName = 'Textarea'
