import { screen } from '@testing-library/react'
import { useState } from 'react'

import type { CheckboxOptions } from '../'
import { Checkbox } from '../'
import { render } from '../../../../../tests'

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
  it('should toggle checked attribute on click', async () => {
    const { user } = render(<CheckboxWrapper />)

    const checkbox = screen.getByTestId('checkbox')

    expect(checkbox.getAttribute('aria-checked')).toBe('false')

    await user.click(checkbox)

    expect(checkbox.getAttribute('aria-checked')).toBe('true')

    await user.click(checkbox)

    expect(checkbox.getAttribute('aria-checked')).toBe('false')
  })

  it('should do nothing on click on disabled checkbox', async () => {
    render(<CheckboxWrapper disabled />)

    const checkbox = screen.getByTestId('checkbox')

    expect(checkbox.getAttribute('aria-checked')).toBe('false')
    expect(checkbox).toBeDisabled()
  })
})
