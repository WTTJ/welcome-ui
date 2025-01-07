import React from 'react'

import { render } from '../../../../../utils/tests'
import { Toggle } from '../'

describe('<Toggle>', () => {
  it('should render correctly', () => {
    const { container } = render(<Toggle />)

    expect(container.querySelector('input')).toBeInTheDocument()
  })
})
