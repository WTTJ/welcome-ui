import React from 'react'

import { render } from '../../src/utils/tests'

import { Slider } from './index'

describe('<Slider>', () => {
  it('should render correctly with no props', () => {
    const { container } = render(
      <Slider>
        <h1>page1</h1>
        <h1>page2</h1>
        <h1>page3</h1>
      </Slider>
    )

    expect(container).toHaveTextContent('page1')
  })
})
