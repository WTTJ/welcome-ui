import React from 'react'

import { render } from '../../src/utils/tests'

import { Toggle } from './index'

describe('<Toggle>', () => {
  it('should render correctly', () => {
    const { container } = render(<Toggle />)

    expect(container.querySelector('input')).toBeInTheDocument()
  })
})
