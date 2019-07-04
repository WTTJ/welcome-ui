import React from 'react'
import { bool, func, string } from 'prop-types'

import { REFS_TYPE, SIZES_TYPE, VARIANTS_TYPE } from '../../utils/propTypes'

import * as S from './styles'

export const InputText = ({
  _ref,
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
}) => (
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
    ref={_ref}
    size={size}
    type={type}
    value={value}
    variant={variant}
  />
)

InputText.propTypes = {
  _ref: REFS_TYPE,
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
