import React from 'react'
import PropTypes from 'prop-types'

import { Input } from './styles'

export const RadioTab = ({ checked, disabled, name, onBlur, onChange, onFocus, value }) => (
  <Input
    checked={checked}
    disabled={disabled}
    id={value}
    name={name}
    onBlur={onBlur}
    onChange={onChange}
    onFocus={onFocus}
    type="radio"
    value={value}
  />
)

RadioTab.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string
}
