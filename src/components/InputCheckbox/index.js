import React, { forwardRef, useEffect, useState } from 'react'
import { bool, elementType, func, string } from 'prop-types'

import { FINAL_FORM_INPUT_TYPES } from '../../utils'

import * as S from './styles'

export const InputCheckbox = forwardRef(
  ({ checked = false, Component = S.InputCheckbox, dataTestId, name, onChange, ...rest }, ref) => {
    // control checked state here if there is no parent like Field or ConnectedField
    const [isChecked, setIsChecked] = useState(checked)

    // Ensure component is controlled
    useEffect(() => {
      setIsChecked(checked)
    }, [checked])

    const handleChange = e => {
      if (e.target) {
        e.target.checked = !checked
      }
      onChange && onChange(e)
    }

    return (
      <Component
        checked={isChecked}
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

InputCheckbox.type = 'InputCheckbox'
InputCheckbox.displayName = 'InputCheckbox'

InputCheckbox.propTypes = {
  ...FINAL_FORM_INPUT_TYPES,
  checked: bool,
  Component: elementType,
  name: string.isRequired,
  onChange: func.isRequired
}
