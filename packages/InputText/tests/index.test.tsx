import React, { useState } from 'react'
import { expect, test } from 'vitest'
import { fireEvent } from '@testing-library/react'

import { render } from '../../../utils/tests'
import { InputText, InputTextOptions } from '../src'

const InputTextWrapper: React.FC<InputTextOptions> = props => {
  const [value, setValue] = useState('test')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <InputText dataTestId="input" name="input" onChange={handleChange} value={value} {...props} />
  )
}

test('<InputText> displays given value', () => {
  const { getByTestId } = render(<InputTextWrapper />)

  const input = getByTestId('input') as HTMLInputElement
  expect(input.value).toBe('test')
})

test("<InputText> can't remove value", () => {
  const { getByTestId, queryByRole } = render(<InputTextWrapper />)

  const input = getByTestId('input') as HTMLInputElement

  // Use `queryByTitle` to expect no close button
  const clearButton = queryByRole('button')
  expect(clearButton).toBeNull()

  expect(input.value).toBe('test')
})

test('<InputText isClearable> can remove value', () => {
  const { getByRole, getByTestId } = render(<InputTextWrapper isClearable />)

  const input = getByTestId('input') as HTMLInputElement
  expect(input.value).toBe('test')

  const clearButton = getByRole('button')
  fireEvent.click(clearButton)
  expect(input.value).toBe('')
})
