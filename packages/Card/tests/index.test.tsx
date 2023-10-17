import React from 'react'
import { describe, expect, it } from 'vitest'

import { render } from '../../../utils/tests'
import { Card } from '../src'

const content = 'Jungle'

describe('<Card>', () => {
  it('should render correctly', () => {
    const { container } = render(<Card>{content}</Card>)

    expect(container).toHaveTextContent(content)
  })
})
