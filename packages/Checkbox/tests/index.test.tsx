import React, { useState } from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from '../../../utils/tests'
import { Checkbox, CheckboxOptions } from '../src'

const CheckboxWrapper: React.FC<CheckboxOptions> = props => {
  const [value, setValue] = useState(false)

  const handleChange = () => {
    setValue(!value)
  }

  return (
    <Checkbox
      checked={value}
      dataTestId="checkbox"
      name="checkbox"
      onChange={handleChange}
      {...props}
    />
  )
}

test('<Checkbox> toggles on input click', () => {
  const { getByTestId } = render(<CheckboxWrapper />)
  const checkbox = getByTestId('checkbox')

  expect(checkbox.getAttribute('aria-checked')).toBe('false')

  fireEvent.click(checkbox)
  expect(checkbox.getAttribute('aria-checked')).toBe('true')

  fireEvent.click(checkbox)
  expect(checkbox.getAttribute('aria-checked')).toBe('false')
})
