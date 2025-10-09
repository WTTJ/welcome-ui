import { screen } from '@testing-library/react'

import { render } from '@tests'

import { Icon } from './Icon'

describe('Icon', () => {
  it('renders even when name does not exist in svg sprite', () => {
    const { container } = render(<Icon name="test-of-inexisting-icon-name" />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders with correct attributes', () => {
    render(<Icon aria-label="add icon" data-testid="icon" name="plus" />)

    const svg = screen.getByTestId('icon')
    const use = svg.querySelector('use')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-label', 'add icon')
    expect(svg).toHaveClass(/size-md/)
    expect(use).toHaveAttribute('href', '#plus')
  })

  it('applies custom size class', () => {
    render(<Icon data-testid="icon" name="plus" size="lg" />)

    const svg = screen.getByTestId('icon')
    expect(svg).toHaveClass(/size-lg/)
  })

  it('applies custom className', () => {
    render(<Icon className="custom-class" data-testid="icon" name="plus" />)

    const svg = screen.getByTestId('icon')
    expect(svg).toHaveClass(/custom-class/)
  })
})
