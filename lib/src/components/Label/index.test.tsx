import { screen } from '@testing-library/react'

import { render } from '@tests'

import { Label } from './index'

describe('Label', () => {
  it('renders children correctly', () => {
    render(<Label>Test Label</Label>)

    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('shows required asterisk when required', () => {
    const { container } = render(<Label required>Required Label</Label>)

    const asterisk = container.querySelector('[href="#asterisk"]')
    expect(asterisk).toBeInTheDocument()
  })

  it('shows VariantIcon when variant is provided', () => {
    const { container } = render(<Label variant="danger">Label with variant</Label>)

    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('shows LockIcon when disabled', () => {
    const { container } = render(<Label disabled>Disabled Label</Label>)

    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Label className="custom-class">Custom Label</Label>)

    expect(screen.getByText('Custom Label')).toHaveClass(/custom-class/)
  })
})
