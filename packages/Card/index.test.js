import React from 'react'

import { render } from '../../src/utils/tests'

import { Card } from './index'

const content = 'Jungle'

describe('<Card>', () => {
  it('should render correctly', () => {
    const { container } = render(<Card>{content}</Card>)

    expect(container).toHaveTextContent(content)
  })
})
