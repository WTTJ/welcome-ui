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
    const { getAllByLabelText, getAllByRole } = render(<TestSwiper />)
    // Both the swiper item and the corresponding pagination item have the same label
    const labels = getAllByLabelText('2 of 3')
    const firstPaginationButton = labels[1]
    const slides = getAllByRole('group')

    // Act
    fireEvent.click(firstPaginationButton)

    // Assert
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

describe('<LoopingSwiper>', () => {
  it('should change page (and loop) using next button', () => {
    // Arrange
    const { getAllByRole, getByTestId } = render(<TestLoopingSwiper />)
    const slides = getAllByRole('group')
    const nextButton = getByTestId('swiper-button-next')

    // Act
    fireEvent.click(nextButton)

    // Assert
    expect(slides[0]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[2]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[3]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[4]).toHaveAttribute('aria-hidden', 'true')

    // Act
    fireEvent.click(nextButton)

    // Assert
    expect(slides[0]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[2]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[3]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[4]).toHaveAttribute('aria-hidden', 'false')

    // Act
    fireEvent.click(nextButton)

    // Assert
    expect(slides[0]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[2]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[3]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[4]).toHaveAttribute('aria-hidden', 'true')
  })

  it('should change page (and loop) using prev button', () => {
    // Arrange
    const { getAllByRole, getByTestId } = render(<TestLoopingSwiper />)
    const slides = getAllByRole('group')
    const nextButton = getByTestId('swiper-button-prev')

    // Act
    fireEvent.click(nextButton)

    // Assert
    expect(slides[0]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[2]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[3]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[4]).toHaveAttribute('aria-hidden', 'false')

    // Act
    fireEvent.click(nextButton)

    // Assert
    expect(slides[0]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[2]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[3]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[4]).toHaveAttribute('aria-hidden', 'true')

    // Act
    fireEvent.click(nextButton)

    // Assert
    expect(slides[0]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[2]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[3]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[4]).toHaveAttribute('aria-hidden', 'true')
  })
})
