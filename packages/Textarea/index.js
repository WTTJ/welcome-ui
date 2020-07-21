import React, { forwardRef } from 'react'
import { bool, func, number, oneOf, string } from 'prop-types'

import { SIZES_TYPE, VARIANTS_TYPE } from '../../utils/propTypes'

import * as S from './styles'

export const Textarea = forwardRef(
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

Textarea.type = 'Textarea'
Textarea.displayName = 'Textarea'

Textarea.propTypes /* remove-proptypes */ = {
  autoFocus: bool,
  disabled: bool,
  maxLength: number,
  minRows: number,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  placeholder: string,
  size: oneOf(SIZES_TYPE),
  value: string,
  variant: oneOf(VARIANTS_TYPE)
}
