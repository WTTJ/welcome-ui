import React from 'react'
import { array, bool, func, node, oneOfType, string } from 'prop-types'

import { createEvent } from '../../utils/'
import { Icon } from '../Icon'

import { StyledSelect } from './styles'

const DropdownIndicator = <Icon name="down" size="xs" />

export const Select = ({
  autoFocus,
  className,
  disabled = false,
  inputRef,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  options,
  placeholder,
  searchable = false,
  value
}) => {
  const handleChange = option => {
    const event = createEvent({ name, value: option.value })
    onChange(event)
  }

  const selected = options.find(option => option.value === value)

  return (
    <StyledSelect
      autoFocus={autoFocus}
      className={className}
      classNamePrefix="wui"
      components={{
        DropdownIndicator: () => DropdownIndicator
      }}
      inputRef={inputRef}
      isDisabled={disabled}
      isSearchable={searchable}
      name={name}
      onBlur={onBlur}
      onChange={handleChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      options={options}
      placeholder={placeholder}
      value={selected}
    />
  )
}

Select.propTypes = {
  autoFocus: bool,
  className: string,
  disabled: bool,
  inputRef: node,
  name: string.isRequired,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  options: array.isRequired,
  placeholder: oneOfType([string, bool]),
  searchable: bool,
  value: string
}
