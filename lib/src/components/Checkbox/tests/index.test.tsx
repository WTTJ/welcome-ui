import React, { useState } from 'react'
import { act, screen } from '@testing-library/react'

import { Checkbox, CheckboxOptions } from '../'
import { render } from '../../../../tests'

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
  test('should toggle checked attribute on click', async () => {
    const { user } = render(<CheckboxWrapper />)

    const checkbox = screen.getByTestId('checkbox')

    expect(checkbox.getAttribute('aria-checked')).toBe('false')

    await act(() => user.click(checkbox))

    expect(checkbox.getAttribute('aria-checked')).toBe('true')

    await act(() => user.click(checkbox))

    expect(checkbox.getAttribute('aria-checked')).toBe('false')
  })

  test('should do nothing on click on disabled checkbox', async () => {
    render(<CheckboxWrapper disabled />)

    const checkbox = screen.getByTestId('checkbox')

    expect(checkbox.getAttribute('aria-checked')).toBe('false')
    expect(checkbox).toBeDisabled()
  })
})
