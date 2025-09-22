import { screen } from '@testing-library/react'
import React, { useState } from 'react'

import { render } from '@tests'

import { PasswordInput } from '../'
import type { PasswordInputProps } from '../types'

const PasswordInputWrapper = (props: PasswordInputProps) => {
  const [value, setValue] = useState('test')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <PasswordInput
      data-testid="input"
      name="input"
      onChange={handleChange}
      value={value}
      {...props}
    />
  )
}

describe('<PasswordInput>', () => {
  it('should display given value', () => {
    render(<PasswordInputWrapper />)

    const input = screen.getByTestId('input') as HTMLInputElement

    expect(input.value).toBe('test')
  })

  it('should have password attribute', () => {
    render(<PasswordInputWrapper />)

    const input = screen.getByTestId('input')
    const button = screen.getByTestId('input-action')

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(input).toHaveAttribute('type', 'password')
  })

  it('should have text attribute', async () => {
    const { user } = render(<PasswordInputWrapper />)

    const input = screen.getByTestId('input')
    const button = screen.getByTestId('input-action')

    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(input).toHaveAttribute('type', 'text')
  })
})
