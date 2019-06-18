import React from 'react'
import { bool, func, node, string } from 'prop-types'

import { StyledInput } from './styles'

export const RadioTab = ({
  autoFocus,
  checked,
  disabled,
  inputRef,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
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
    ref={inputRef}
    type="radio"
    value={value}
  />
)

RadioTab.type = 'RadioTab'

RadioTab.propTypes = {
  autoFocus: bool,
  checked: bool,
  disabled: bool,
  inputRef: node,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  value: string
}
