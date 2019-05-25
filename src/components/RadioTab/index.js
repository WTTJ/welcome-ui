import React from 'react'
import { bool, func, string } from 'prop-types'

import { Input } from './styles'

export const RadioTab = ({ checked, disabled, name, onBlur, onChange, onFocus, value }) => {
  console.debug('RadioTab.render', name, value, checked)
  return (
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
}

RadioTab.propTypes = {
  checked: bool,
  disabled: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  value: string
}
