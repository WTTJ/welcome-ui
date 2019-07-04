import React from 'react'
import { bool, func, string } from 'prop-types'

import { REFS_TYPE, SIZES_TYPE } from '../../utils/propTypes'

import { StyledInput } from './styles'

export const RadioTab = ({
  _ref,
  autoFocus,
  checked,
  disabled,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  size = 'lg',
  value
}) => (
  <StyledInput
    autoFocus={autoFocus}
    checked={checked}
    disabled={disabled}
    id={value}
    name={name}
    onBlur={onBlur}
    onChange={onChange}
    onFocus={onFocus}
    onKeyDown={onKeyDown}
    ref={_ref}
    size={size}
    type="radio"
    value={value}
  />
)

RadioTab.type = 'RadioTab'

RadioTab.propTypes = {
  _ref: REFS_TYPE,
  autoFocus: bool,
  checked: bool,
  disabled: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  size: SIZES_TYPE,
  value: string
}
