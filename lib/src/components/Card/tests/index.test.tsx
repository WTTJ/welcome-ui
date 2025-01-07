import React from 'react'

import { Card } from '../'
import { render } from '../../../../../utils/tests'

const content = 'Jungle'

describe('<Card>', () => {
  it('should render correctly', () => {
    const { container } = render(<Card>{content}</Card>)

    expect(container).toHaveTextContent(content)
  })
})
