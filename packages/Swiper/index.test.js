import React from 'react'

import { render } from '../../src/utils/tests'

import { Swiper } from './index'

describe('<Swiper>', () => {
  it('should render correctly with no props', () => {
    const { container } = render(
      <Swiper>
        <Swiper.Slide>page1</Swiper.Slide>
        <Swiper.Slide>page2</Swiper.Slide>
        <Swiper.Slide>page3</Swiper.Slide>
      </Swiper>
    )

    expect(container).toHaveTextContent('page1')
  })
})
