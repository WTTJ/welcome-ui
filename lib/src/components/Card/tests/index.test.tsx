import React from 'react'
import { describe, expect, it } from 'vitest'

import { Card } from '../'
import { render } from '../../../../tests'

const content = 'Jungle'

describe('<Card>', () => {
  it('should render correctly', () => {
    const { container } = render(<Card>{content}</Card>)

    expect(container).toHaveTextContent(content)
  })
})
