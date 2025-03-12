import React, { useState } from 'react'
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { InputText, InputTextOptions } from '../'
import { render } from '../../../../tests'

const InputTextWrapper: React.FC<InputTextOptions> = props => {
  const [value, setValue] = useState('test')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <InputText dataTestId="input" name="input" onChange={handleChange} value={value} {...props} />
  )
}

describe('<InputText />', () => {
  it('displays given value', () => {
    const { getByTestId } = render(<InputTextWrapper />)

    const input = getByTestId('input') as HTMLInputElement
    expect(input.value).toBe('test')
  })

  it("can't remove value", () => {
    const { getByTestId, queryByRole } = render(<InputTextWrapper />)

    const input = getByTestId('input') as HTMLInputElement

    // Use `queryByTitle` to expect no close button
    const clearButton = queryByRole('button')
    expect(clearButton).toBeNull()

    expect(input.value).toBe('test')
  })

  it('can remove value', async () => {
    const { user } = render(<InputTextWrapper isClearable />)

    const input = screen.getByTestId('input') as HTMLInputElement
    expect(input.value).toBe('test')

    const clearButton = screen.getByRole('button')

    await user.click(clearButton)

    expect(input.value).toBe('')
  })
})
