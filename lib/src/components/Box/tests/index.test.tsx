import React from 'react'

import { Box } from '../'
import { render } from '../../../../tests'

describe('<Box>', () => {
  it('should render correctly', () => {
    const { container } = render(<Box>children</Box>)

    expect(container).toHaveTextContent('children')
  })
})
