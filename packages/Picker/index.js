import React, { forwardRef } from 'react'
import { array, bool, func, string } from 'prop-types'
import { Box } from '@xstyled/styled-components'
import { RadioGroup as ReakitRadioGroup, useRadioState } from 'reakit/Radio'
import { FieldGroup } from '@welcome-ui/field-group'
import { Label } from '@welcome-ui/label'

import * as S from './styles'

export const Picker = forwardRef(
  ({ connected, label, name, onChange, options, required, value }, ref) => {
    const radio = useRadioState({ state: value })

    const handleClick = e => {
      e.stopPropagation()
      radio.onClick && radio.onClick(e)
      onChange && onChange(e)
    }

    return (
      <FieldGroup as={ReakitRadioGroup} mb={0} ref={ref} required={required}>
        <Box display="flex" flexWrap="wrap">
          {options.map(({ element: Component, value: optValue }) => (
            <Label checkableField key={`${label}-${name}-${optValue}`} onClick={handleClick}>
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
  options: array.isRequired,
  required: bool,
  value: string
}
