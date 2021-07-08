import React, { forwardRef } from 'react'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

export type Size = 'sm' | 'md' | 'lg'
export type Variant = 'error' | 'info' | 'success' | 'valid' | 'warning'

export interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  autoFocus?: boolean
  dataTestId?: string
  disabled?: boolean
  maxLength?: number
  minRows?: number
  name?: string
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  size?: Size
  value: string
  variant?: Variant
}

const TextareaComponent = forwardRef<HTMLTextAreaElement, TextareaProps & WuiProps>(
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
      size = 'lg',
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
      minRows={minRows}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      ref={ref}
      size={size}
      value={value}
      variant={variant}
      {...rest}
    />
  )
)

TextareaComponent.displayName = 'Textarea'

export const Textarea = Object.assign(TextareaComponent, {
  type: 'Textarea'
})
