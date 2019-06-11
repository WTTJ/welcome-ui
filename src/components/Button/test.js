import React from 'react'

import { render } from '../../utils/tests'

import { Button } from './index'

const content = 'Jungle'

test('<Button> renders correctly', () => {
  const { container } = render(<Button>{content}</Button>)
  expect(container).toHaveTextContent(content)
})
