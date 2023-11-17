import React, { useState } from 'react'
import { describe, expect, test } from 'vitest'
import { fireEvent } from '@testing-library/react'

import { render } from '../../../utils/tests'
import { PasswordInput, PasswordInputOptions } from '../src'

const PasswordInputWrapper: React.FC<PasswordInputOptions> = props => {
  const [value, setValue] = useState('test')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <PasswordInput
      dataTestId="input"
      name="input"
      onChange={handleChange}
      value={value}
      {...props}
    />
  )
}

describe('<PasswordInput>', () => {
  test('should display given value', () => {
    const { getByTestId } = render(<PasswordInputWrapper />)

    const input = getByTestId('input') as HTMLInputElement
    expect(input.value).toBe('test')
  })

  test('should have password attribute', () => {
    const { getByTestId } = render(<PasswordInputWrapper />)

    const input = getByTestId('input')
    const button = getByTestId('input-action')

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(input).toHaveAttribute('type', 'password')
  })

  test('should have text attribute', () => {
    const { getByTestId } = render(<PasswordInputWrapper />)

    const input = getByTestId('input')
    const button = getByTestId('input-action')

    fireEvent.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(input).toHaveAttribute('type', 'text')
  })
})
