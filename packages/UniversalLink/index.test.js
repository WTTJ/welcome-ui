import React from 'react'

import { render } from '../../utils/tests'

import { UniversalLink } from './index'

const content = 'Jungle'

describe('<UniversalLink>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<UniversalLink dataTestId="link">{content}</UniversalLink>)
    const button = getByTestId('link')

    expect(button).toHaveTextContent(content)
  })

  it('should render correctly with a target blank', () => {
    const { getByTestId } = render(
      <UniversalLink dataTestId="link" target="_blank">
        {content}
      </UniversalLink>
    )
    const button = getByTestId('link')

    expect(button).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
