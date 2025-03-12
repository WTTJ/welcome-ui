import React, { useState } from 'react'
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { PasswordInput, PasswordInputOptions } from '../'
import { render } from '../../../../tests'

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
