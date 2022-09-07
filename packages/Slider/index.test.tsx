import React from 'react'

import { render } from '../../utils/tests'

import { Slider } from './index'

describe('<Slider>', () => {
  it('should render correctly', () => {
    const handleChange = jest.fn()
    const { container } = render(<Slider max={100} min={0} onChange={handleChange} value={50} />)

    expect(container)
  })
})
