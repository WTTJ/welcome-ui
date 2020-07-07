import React from 'react'

import { render } from '../../src/utils/tests'

import { Swiper, useSwiper } from './index'

const TestSwiper = () => {
  const swiper = useSwiper()
  return (
    <Swiper {...swiper}>
      <Swiper.Slide>page1</Swiper.Slide>
      <Swiper.Slide>page2</Swiper.Slide>
      <Swiper.Slide>page3</Swiper.Slide>
    </Swiper>
  )
}

describe('<Swiper>', () => {
  it('should render correctly with no props', () => {
    const { container } = render(<TestSwiper />)

    expect(container).toHaveTextContent('page1')
  })
})
