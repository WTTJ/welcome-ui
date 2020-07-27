/* eslint-disable react/no-multi-comp */
import React from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from '../../utils/tests'
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

const TestLoopingSwiper = () => {
  const swiper = useSwiper({
    prevButton: <LeftIcon />,
    nextButton: <RightIcon />,
    loop: true,
    slidesToShow: 2,
    slidesToSwipe: 2
  })
  return (
    <Swiper {...swiper} dataTestId="swiper">
      <Swiper.Slide>page1</Swiper.Slide>
      <Swiper.Slide>page2</Swiper.Slide>
      <Swiper.Slide>page3</Swiper.Slide>
      <Swiper.Slide>page4</Swiper.Slide>
      <Swiper.Slide>page5</Swiper.Slide>
    </Swiper>
  )
}

describe('<Swiper>', () => {
  it('should render correctly with no props', () => {
    const { container } = render(<TestSwiper />)

    expect(container).toHaveTextContent('page1')
  })

  it('should change page using pagination', () => {
    // Arrange
    const { container, getAllByRole } = render(<TestSwiper />)
    const slides = getAllByRole('group')
    const pagination = container.querySelectorAll('[aria-controls=swiper]')
    const firstPaginationButton = pagination[1]

    // Act
    fireEvent.click(firstPaginationButton)

    // Assert
    expect(slides[0]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'false')
    expect(pagination[0]).toHaveAttribute('aria-selected', 'false')
    expect(pagination[1]).toHaveAttribute('aria-selected', 'true')
  })

  it('should change page using buttons', () => {
    const { container, getAllByRole, getByTestId } = render(<TestSwiper />)

    const nextButton = getByTestId('swiper-button-next')
    fireEvent.click(nextButton)

    const slides = getAllByRole('group')
    const pagination = container.querySelectorAll('[aria-controls=swiper]')
    expect(slides[0]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'false')
    expect(pagination[0]).toHaveAttribute('aria-selected', 'false')
    expect(pagination[1]).toHaveAttribute('aria-selected', 'true')
  })
})

describe('<LoopingSwiper>', () => {
  it('should change page (and loop) using next button', () => {
    // Arrange
    const { container, getAllByRole, getByTestId } = render(<TestLoopingSwiper />)
    const slides = getAllByRole('group')
    const nextButton = getByTestId('swiper-button-next')
    const pagination = container.querySelectorAll('[aria-controls=swiper]')

    // Act
    fireEvent.click(nextButton)

    // Assert
    expect(slides[0]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[2]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[3]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[4]).toHaveAttribute('aria-hidden', 'true')
    expect(pagination[2]).toHaveAttribute('aria-selected', 'true')

    // Act
    fireEvent.click(nextButton)

    // Assert
    expect(slides[0]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[2]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[3]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[4]).toHaveAttribute('aria-hidden', 'false')
    expect(pagination[3]).toHaveAttribute('aria-selected', 'true')

    // Act
    fireEvent.click(nextButton)

    // Assert
    expect(slides[0]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[2]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[3]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[4]).toHaveAttribute('aria-hidden', 'true')
    expect(pagination[0]).toHaveAttribute('aria-selected', 'true')
  })

  it('should change page (and loop) using prev button', () => {
    // Arrange
    const { container, getAllByRole, getByTestId } = render(<TestLoopingSwiper />)
    const slides = getAllByRole('group')
    const nextButton = getByTestId('swiper-button-prev')
    const pagination = container.querySelectorAll('[aria-controls=swiper]')

    // Act
    fireEvent.click(nextButton)

    // Assert
    expect(slides[0]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[2]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[3]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[4]).toHaveAttribute('aria-hidden', 'false')
    expect(pagination[3]).toHaveAttribute('aria-selected', 'true')

    // Act
    fireEvent.click(nextButton)

    // Assert
    expect(slides[0]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[2]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[3]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[4]).toHaveAttribute('aria-hidden', 'true')
    expect(pagination[1]).toHaveAttribute('aria-selected', 'true')

    // Act
    fireEvent.click(nextButton)

    // Assert
    expect(slides[0]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[2]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[3]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[4]).toHaveAttribute('aria-hidden', 'true')
    expect(pagination[0]).toHaveAttribute('aria-selected', 'true')
  })
})
