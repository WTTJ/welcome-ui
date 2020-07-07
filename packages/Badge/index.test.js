import React from 'react'

import { render } from '../../utils/tests'

import { Badge } from './index'

const content = '1'

describe('<Badge>', () => {
  it('should render correctly', () => {
    const { container } = render(<Badge>{content}</Badge>)

    expect(container).toHaveTextContent(content)
  })
})
