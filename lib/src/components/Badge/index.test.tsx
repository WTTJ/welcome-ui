import { screen } from '@testing-library/react'

import { Badge } from '@/components/Badge'

import { render } from '@tests'

const content = '1'

describe('<Badge>', () => {
  it('should render correctly', () => {
    const { container } = render(<Badge>{content}</Badge>)

    expect(container).toHaveTextContent(content)
  })

  it('should have correct size', () => {
    render(<Badge data-testid="badge" size="sm" />)

    const component = screen.getByTestId('badge')

    expect(component.className).toMatch(/variant-warm/)
    expect(component.className).toMatch(/size-sm/)
  })

  it('should have correct brand variant color', () => {
    render(
      <Badge data-testid="badge" variant="brand">
        {content}
      </Badge>
    )

    const component = screen.getByTestId('badge')

    expect(component.className).toMatch(/variant-brand/)
  })

  it('should have correct blue variant color', () => {
    render(
      <Badge data-testid="badge" variant="blue">
        {content}
      </Badge>
    )

    const component = screen.getByTestId('badge')

    expect(component.className).toMatch(/variant-blue/)
  })
})
