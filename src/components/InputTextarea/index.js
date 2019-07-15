import React, { forwardRef } from 'react'
import { bool, func, number, string } from 'prop-types'

import { SIZES_TYPE, VARIANTS_TYPE } from '../../utils'

import * as S from './styles.js'

export const InputTextarea = forwardRef(
  (
    {
      autoFocus,
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
      variant
    },
    ref
  ) => (
    <S.Textarea
      autoFocus={autoFocus}
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
    />
  )
)

InputTextarea.type = 'InputTextarea'
InputTextarea.displayName = 'InputTextarea'

InputTextarea.propTypes = {
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
  size: SIZES_TYPE,
  value: string,
  variant: VARIANTS_TYPE
}
