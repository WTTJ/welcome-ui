import React from 'react'
import { array, bool, func, oneOfType, string } from 'prop-types'

import { createEvent } from '../../utils/events'
import { Icon } from '../Icon'

import { StyledSelect } from './styles'

const DropdownIndicator = <Icon name="down" size="xs" />

export const Select = ({
  autoFocus = false,
  className,
  disabled = false,
  name,
  onBlur,
  onChange,
  onFocus,
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
      isDisabled={disabled}
      isSearchable={searchable}
      name={name}
      onBlur={onBlur}
      onChange={handleChange}
      onFocus={onFocus}
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
  name: string.isRequired,
  onBlur: func,
  onChange: func,
  onFocus: func,
  options: array.isRequired,
  placeholder: oneOfType([string, bool]),
  searchable: bool,
  value: string
}
