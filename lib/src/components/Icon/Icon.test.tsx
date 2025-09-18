import { screen } from '@testing-library/react'

import { render } from '@tests'

import { Icon } from './Icon'

describe('Icon', () => {
  const mockContent = {
    block:
      '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />',
    viewBox: '0 0 24 24',
  }

  it('renders nothing when content is not provided', () => {
    const { container } = render(<Icon alt="test" />)
    expect(container.firstChild).toBeNull()
  })

  it('renders with correct attributes', () => {
    render(<Icon alt="star icon" content={mockContent} />)

    const svg = screen.getByRole('img')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-label', 'star icon')
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
    expect(svg).toHaveClass(/size-md/)

    const gElement = svg.querySelector('g')
    expect(gElement).toHaveProperty(
      'innerHTML',
      '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>'
    )
  })

  it('applies custom size class', () => {
    render(<Icon alt="test" content={mockContent} data-testid="icon" size="lg" />)

    const svg = screen.getByRole('img')
    expect(svg).toHaveClass(/size-lg/)
  })

  it('applies custom className', () => {
    render(<Icon alt="test" className="custom-class" content={mockContent} />)

    const svg = screen.getByRole('img')
    expect(svg).toHaveClass(/custom-class/)
  })
})
