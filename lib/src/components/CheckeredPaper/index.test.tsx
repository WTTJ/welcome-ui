import { screen } from '@testing-library/react'

import { render } from '@tests'

import { CheckeredPaper } from './index'

describe('CheckeredPaper', () => {
  it('renders children correctly', () => {
    render(<CheckeredPaper>Test checkered paper</CheckeredPaper>)

    expect(screen.getByText('Test checkered paper')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<CheckeredPaper className="custom-class">Test checkered paper</CheckeredPaper>)

    const checkeredPaper = screen.getByText('Test checkered paper')
    expect(checkeredPaper).toHaveClass(/custom-class/)
  })
})
