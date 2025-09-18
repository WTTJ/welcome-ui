import { screen } from '@testing-library/react'

import { render } from '@tests'

import { Hint } from './index'

describe('Hint', () => {
  it('renders children correctly', () => {
    render(<Hint>Test hint</Hint>)

    expect(screen.getByText('Test hint')).toBeInTheDocument()
  })

  it('applies variant className when variant is provided', () => {
    render(<Hint variant="danger">Test hint</Hint>)

    const hint = screen.getByText('Test hint')
    expect(hint).toHaveClass(/variant-danger/)
  })

  it('applies custom className', () => {
    render(<Hint className="custom-class">Test hint</Hint>)

    const hint = screen.getByText('Test hint')
    expect(hint).toHaveClass(/custom-class/)
  })
})
