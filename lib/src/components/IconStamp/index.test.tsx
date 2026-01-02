import { screen } from '@testing-library/react'

import { render } from '@tests'

import { IconStamp } from './index'

describe('IconStamp', () => {
  it('renders with default props', () => {
    render(<IconStamp data-testid="component" name="icons" />)

    const component = screen.getByTestId('component')

    expect(component.querySelector('svg')).toBeInTheDocument()
    expect(component.className).not.toMatch(/variant-brand/)
  })

  it('renders with custom props', () => {
    render(
      <IconStamp
        className="custom-class"
        data-testid="component"
        name="icons"
        size="lg"
        variant="brand"
      />
    )

    const component = screen.getByTestId('component')

    expect(component.className).toMatch(/variant-brand/)
    expect(component.className).toMatch(/custom-class/)
  })
})
