import React from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from '../../src/utils/tests'
import { LeftIcon, RightIcon } from '../../icons'

import { Swiper, useSwiper } from './index'

const TestSwiper = () => {
  const swiper = useSwiper({ prevButton: <LeftIcon />, nextButton: <RightIcon /> })
  return (
    <Swiper {...swiper} dataTestId="swiper">
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

  it('should change page using pagination', () => {
    const { getAllByRole, getByTestId } = render(<TestSwiper />)

    const nextButton = getByTestId('swiper-button-next')
    fireEvent.click(nextButton)

    const slides = getAllByRole('group')
    expect(slides[0]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'false')
  })

  it('should change page using buttons', () => {
    const { getAllByRole, getByTestId } = render(<TestSwiper />)

    const nextButton = getByTestId('swiper-button-next')
    fireEvent.click(nextButton)

    const slides = getAllByRole('group')
    expect(slides[0]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'false')
  })
})
