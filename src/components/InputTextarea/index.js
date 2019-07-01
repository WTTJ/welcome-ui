import React from 'react'
import { bool, func, node, number, oneOf, string } from 'prop-types'

import { VARIANTS } from '../../propTypes'

import { StyledTextarea } from './styles.js'

export const InputTextarea = ({
  _ref,
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
}) => (
  <StyledTextarea
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
    ref={_ref}
    size={size}
    value={value}
    variant={variant}
  />
)

InputTextarea.propTypes = {
  _ref: node,
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
  size: oneOf(['sm', 'md', 'lg']),
  value: string,
  variant: oneOf(VARIANTS)
}
