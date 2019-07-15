import React, { forwardRef } from 'react'
import { bool, func, string } from 'prop-types'

import { SIZES_TYPE, VARIANTS_TYPE } from '../../utils'

import * as S from './styles'

export const InputText = forwardRef(
  (
    {
      autoFocus,
      disabled,
      name,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      placeholder,
      size = 'lg',
      type = 'text',
      value,
      variant
    },
    ref
  ) => (
    <S.InputText
      autoFocus={autoFocus}
      disabled={disabled}
      id={name}
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
    />
  )
)

InputText.displayName = 'InputText'

InputText.propTypes = {
  autoFocus: bool,
  disabled: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  placeholder: string,
  size: SIZES_TYPE,
  type: string,
  value: string,
  variant: VARIANTS_TYPE
}
