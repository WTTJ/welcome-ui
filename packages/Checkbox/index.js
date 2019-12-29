import React, { forwardRef } from 'react'
import { bool, elementType, func, string } from 'prop-types'

import { FINAL_FORM_INPUT_TYPES } from '../Core/utils/propTypes'

import * as S from './styles'

export const Checkbox = forwardRef(
  ({ checked = false, Component = S.Checkbox, dataTestId, name, onChange, ...rest }, ref) => {
    const handleChange = e => {
      e.target.checked = !e.target.checked
      onChange && onChange(e)
    }

    return (
      <Component
        checked={checked}
        data-testid={dataTestId}
        id={name}
        name={name}
        onChange={handleChange}
        ref={ref}
        {...rest}
      />
    )
  }
)

Checkbox.type = 'Checkbox'
Checkbox.displayName = 'Checkbox'

Checkbox.propTypes /* remove-proptypes */ = {
  ...FINAL_FORM_INPUT_TYPES,
  checked: bool,
  Component: elementType,
  name: string.isRequired,
  onChange: func.isRequired
}
