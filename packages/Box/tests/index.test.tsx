import React from 'react'
import { describe, expect, it } from 'vitest'

import { render } from '../../../utils/tests'
import { Box } from '../src'

const content = '1'

describe('<Box>', () => {
  it('should render correctly', () => {
    const { container } = render(<Box>{content}</Box>)

    expect(container).toHaveTextContent(content)
  })
})
