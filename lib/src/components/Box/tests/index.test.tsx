import React from 'react'
import { describe, expect, it } from 'vitest'

import { Box } from '../'
import { render } from '../../../../tests'

describe('<Box>', () => {
  it('should render correctly', () => {
    const { container } = render(<Box>children</Box>)

    expect(container).toHaveTextContent('children')
  })
})
