import React from 'react'

import { createTheme } from '../../Core/src'
import { render } from '../../../utils/tests'
import { Badge } from '../src'

const content = '1'

const theme = createTheme()

describe('<Badge>', () => {
  it('should render correctly', () => {
    const { container } = render(<Badge>{content}</Badge>)

    expect(container).toHaveTextContent(content)
  })

  it('should have correct size', () => {
    const { getByTestId } = render(
      <Badge dataTestId="badge" size="sm">
        {content}
      </Badge>
    )
    const badge = getByTestId('badge')

    expect(badge).toHaveStyleRule('padding', theme.badges.sizes.sm.padding)
  })

  it('should have correct primary variant color', () => {
    const { getByTestId } = render(
      <Badge dataTestId="badge" variant="primary">
        {content}
      </Badge>
    )
    const badge = getByTestId('badge')

    expect(badge).toHaveStyleRule('background-color', theme.colors['primary-500'])
    expect(badge).toHaveStyleRule('color', 'rgba(0, 0, 0, 1)')
  })

  it('should have correct primary variant color if disabled', () => {
    const { getByTestId } = render(
      <Badge dataTestId="badge" disabled variant="primary">
        {content}
      </Badge>
    )
    const badge = getByTestId('badge')

    expect(badge).toHaveStyleRule('background-color', theme.colors['primary-600'])
    expect(badge).toHaveStyleRule('color', theme.colors['primary-800'])
  })

  it('should have correct circle shape', () => {
    const { getByTestId } = render(
      <Badge dataTestId="badge" shape="circle">
        {content}
      </Badge>
    )
    const badge = getByTestId('badge')

    expect(badge).toHaveStyleRule('border-radius', theme.badges.sizes.md.borderRadius)
  })
})
