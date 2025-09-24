import { screen } from '@testing-library/react'

import { render } from '@tests'

import { VariantIcon } from './index'

describe('VariantIcon', () => {
  it('renders with default props', () => {
    render(<VariantIcon data-testid="component" />)

    const component = screen.getByTestId('component')

    expect(component.querySelector('svg')).toBeInTheDocument()
    expect(component.className).not.toMatch(
      /variant-success|variant-warning|variant-info|variant-ai|variant-danger/
    )
  })

  it('renders with custom props', () => {
    render(
      <VariantIcon className="custom-class" data-testid="component" size="lg" variant="success" />
    )

    const component = screen.getByTestId('component')

    expect(component.className).toMatch(/variant-success/)
    expect(component.className).toMatch(/custom-class/)
  })
})
