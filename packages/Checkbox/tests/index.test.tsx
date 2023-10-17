import React, { useState } from 'react'
import { describe, expect, test } from 'vitest'
import { fireEvent, screen } from '@testing-library/react'

import { render } from '../../../utils/tests'
import { Checkbox, CheckboxOptions } from '../src'

const CheckboxWrapper = (props: CheckboxOptions) => {
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

describe('<Checkbox />', () => {
  test('should toggle checked attribute on click', () => {
    render(<CheckboxWrapper />)
    const checkbox = screen.getByTestId('checkbox')

    expect(checkbox.getAttribute('aria-checked')).toBe('false')

    fireEvent.click(checkbox)
    expect(checkbox.getAttribute('aria-checked')).toBe('true')

    fireEvent.click(checkbox)
    expect(checkbox.getAttribute('aria-checked')).toBe('false')
  })

  test('should do nothing on click on disabled checkbox', () => {
    render(<CheckboxWrapper disabled />)
    const checkbox = screen.getByTestId('checkbox')

    expect(checkbox.getAttribute('aria-checked')).toBe('false')

    fireEvent.click(checkbox)
    expect(checkbox.getAttribute('aria-checked')).toBe('false')
  })
})
