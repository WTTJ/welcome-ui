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
    render(
      <Badge data-testid="badge" size="sm">
        {content}
      </Badge>
    )

    const component = screen.getByTestId('badge')

    expect(component.className).toMatch(/variant-default/)
    expect(component.className).toMatch(/size-sm/)
  })

  it('should have correct primary variant color', () => {
    render(
      <Badge data-testid="badge" variant="primary">
        {content}
      </Badge>
    )

    const component = screen.getByTestId('badge')

    expect(component.className).toMatch(/variant-primary/)
  })

  it('should have correct primary variant color if disabled', () => {
    render(
      <Badge data-testid="badge" disabled variant="primary">
        {content}
      </Badge>
    )

    const component = screen.getByTestId('badge')

    expect(component.className).toMatch(/disabled-primary/)
  })
})
