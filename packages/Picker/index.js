import React, { forwardRef } from 'react'
import { arrayOf, bool, elementType, func, shape, string } from 'prop-types'
import { RadioGroup as ReakitRadioGroup, useRadioState } from 'reakit/Radio'
import { FieldGroup } from '@welcome-ui/field-group'
import { Label } from '@welcome-ui/label'
import { Box } from '@welcome-ui/box'

import * as S from './styles'

export const Picker = forwardRef(
  ({ connected, dataTestId, label, name, onChange, options, required, value, ...rest }, ref) => {
    const radio = useRadioState({ state: value })

    const handleClick = e => {
      e.stopPropagation()
      radio.onClick && radio.onClick(e)
      onChange && onChange(e)
    }

    return (
      <FieldGroup
        {...rest}
        as={ReakitRadioGroup}
        dataTestId={dataTestId}
        mb={0}
        ref={ref}
        required={required}
      >
        <Box display="flex" flexWrap="wrap">
          {options.map(({ element: Component, value: optValue }) => (
            <Label
              checkableField
              dataTestId={dataTestId && `${dataTestId}-item-${name}-${optValue}`}
              key={`${label}-${name}-${optValue}`}
              onClick={handleClick}
            >
              <S.Radio connected={connected} name={name} value={optValue} />
              <Component selected={value === optValue} />
            </Label>
          ))}
        </Box>
      </FieldGroup>
    )
  }
)

Picker.displayName = 'Picker'

Picker.propTypes /* remove-proptypes */ = {
  connected: bool,
  label: string,
  name: string.isRequired,
  onChange: func,
  options: arrayOf(
    shape({
      element: elementType,
      value: string,
    })
  ).isRequired,
  required: bool,
  value: string,
}
