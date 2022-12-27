import React from 'react'

import { render } from '../../utils/tests'

import { Link } from './index'

const content = 'Jungle'

describe('<Link>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Link dataTestId="link">{content}</Link>)
    const link = getByTestId('link')

    expect(link).toHaveTextContent(content)
    expect(link).toHaveStyleRule('color', 'inherit')
  })

  it('should render correctly with a target blank', () => {
    const { getByTestId } = render(
      <Link dataTestId="link" target="_blank">
        {content}
      </Link>
    )
    const button = getByTestId('link')

    expect(button).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
