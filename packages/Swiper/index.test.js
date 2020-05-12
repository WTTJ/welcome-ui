import React from 'react'

import { render } from '../../src/utils/tests'

import { Swiper } from './index'

describe('<Swiper>', () => {
  it('should render correctly with no props', () => {
    const { container } = render(
      <Swiper>
        <Swiper.Page>page1</Swiper.Page>
        <Swiper.Page>page2</Swiper.Page>
        <Swiper.Page>page3</Swiper.Page>
      </Swiper>
    )

    expect(container).toHaveTextContent('page1')
  })
})
