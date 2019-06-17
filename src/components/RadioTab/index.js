import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './styles'

export const RadioTab = ({
  autoFocus,
  checked,
  disabled,
  name,
  onBlur,
  onChange,
  onFocus,
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
    type="radio"
    value={value}
  />
)

RadioTab.type = 'RadioTab'

RadioTab.propTypes = {
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string
}
