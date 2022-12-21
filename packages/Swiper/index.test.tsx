import React from 'react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

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
    slidesToSwipe: 2,
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

  it('should change page using pagination', async () => {
    // Arrange
    const { container, getByText } = render(<TestSwiper />)
    const slide1 = getByText('page1')
    const slide2 = getByText('page2')
    const pagination = container.querySelectorAll('[role=tab]')
    const firstPaginationButton = pagination[1]

    // Act
    await userEvent.click(firstPaginationButton)

    // Assert
    expect(slide1).toHaveAttribute('aria-hidden', 'true')
    expect(slide2).toHaveAttribute('aria-hidden', 'false')
    expect(pagination[0]).toHaveAttribute('aria-selected', 'false')
    expect(pagination[1]).toHaveAttribute('aria-selected', 'true')
  })

  it('should change page using buttons', async () => {
    const { container, getByTestId, getByText } = render(<TestSwiper />)

    const nextButton = getByTestId('swiper-button-next')
    await userEvent.click(nextButton)

    const slide1 = getByText('page1')
    const slide2 = getByText('page2')
    const pagination = container.querySelectorAll('[role=tab]')
    expect(slide1).toHaveAttribute('aria-hidden', 'true')
    expect(slide2).toHaveAttribute('aria-hidden', 'false')
    expect(pagination[0]).toHaveAttribute('aria-selected', 'false')
    expect(pagination[1]).toHaveAttribute('aria-selected', 'true')
  })

  it('should have disabled attribute on buttons', async () => {
    // Arrange
    const { getByTestId } = render(<TestSwiper />)
    const prevButton = getByTestId('swiper-button-prev')
    const nextButton = getByTestId('swiper-button-next')

    // Assert
    expect(prevButton).toHaveAttribute('disabled')

    // Act
    await userEvent.click(nextButton)
    await userEvent.click(nextButton)

    // Assert
    expect(nextButton).toHaveAttribute('disabled')
  })
})

describe('<LoopingSwiper>', () => {
  it('should change page (and loop) using next button', async () => {
    // Arrange
    const { container, getByTestId, getByText } = render(<TestLoopingSwiper />)
    const slide1 = getByText('page1')
    const slide2 = getByText('page2')
    const slide3 = getByText('page3')
    const slide4 = getByText('page4')
    const slide5 = getByText('page5')
    const nextButton = getByTestId('swiper-button-next')
    const pagination = container.querySelectorAll('[role=tab]')

    // Act
    await userEvent.click(nextButton)

    // Assert
    expect(slide1).toHaveAttribute('aria-hidden', 'true')
    expect(slide2).toHaveAttribute('aria-hidden', 'true')
    expect(slide3).toHaveAttribute('aria-hidden', 'false')
    expect(slide4).toHaveAttribute('aria-hidden', 'false')
    expect(slide5).toHaveAttribute('aria-hidden', 'true')
    expect(pagination[2]).toHaveAttribute('aria-selected', 'true')

    // Act
    await userEvent.click(nextButton)

    // Assert
    expect(slide1).toHaveAttribute('aria-hidden', 'true')
    expect(slide2).toHaveAttribute('aria-hidden', 'true')
    expect(slide3).toHaveAttribute('aria-hidden', 'true')
    expect(slide4).toHaveAttribute('aria-hidden', 'false')
    expect(slide5).toHaveAttribute('aria-hidden', 'false')
    expect(pagination[3]).toHaveAttribute('aria-selected', 'true')

    // Act
    await userEvent.click(nextButton)

    // Assert
    expect(slide1).toHaveAttribute('aria-hidden', 'false')
    expect(slide2).toHaveAttribute('aria-hidden', 'false')
    expect(slide3).toHaveAttribute('aria-hidden', 'true')
    expect(slide4).toHaveAttribute('aria-hidden', 'true')
    expect(slide5).toHaveAttribute('aria-hidden', 'true')
    expect(pagination[0]).toHaveAttribute('aria-selected', 'true')
  })

  it('should change page (and loop) using prev button', async () => {
    // Arrange
    const { container, getByTestId, getByText } = render(<TestLoopingSwiper />)
    const slide1 = getByText('page1')
    const slide2 = getByText('page2')
    const slide3 = getByText('page3')
    const slide4 = getByText('page4')
    const slide5 = getByText('page5')
    const nextButton = getByTestId('swiper-button-prev')
    const pagination = container.querySelectorAll('[role=tab]')

    // Act
    await userEvent.click(nextButton)

    // Assert
    expect(slide1).toHaveAttribute('aria-hidden', 'true')
    expect(slide2).toHaveAttribute('aria-hidden', 'true')
    expect(slide3).toHaveAttribute('aria-hidden', 'true')
    expect(slide4).toHaveAttribute('aria-hidden', 'false')
    expect(slide5).toHaveAttribute('aria-hidden', 'false')
    expect(pagination[3]).toHaveAttribute('aria-selected', 'true')

    // Act
    await userEvent.click(nextButton)

    // Assert
    expect(slide1).toHaveAttribute('aria-hidden', 'true')
    expect(slide2).toHaveAttribute('aria-hidden', 'false')
    expect(slide3).toHaveAttribute('aria-hidden', 'false')
    expect(slide4).toHaveAttribute('aria-hidden', 'true')
    expect(slide5).toHaveAttribute('aria-hidden', 'true')
    expect(pagination[1]).toHaveAttribute('aria-selected', 'true')

    // Act
    await userEvent.click(nextButton)

    // Assert
    expect(slide1).toHaveAttribute('aria-hidden', 'false')
    expect(slide2).toHaveAttribute('aria-hidden', 'false')
    expect(slide3).toHaveAttribute('aria-hidden', 'true')
    expect(slide4).toHaveAttribute('aria-hidden', 'true')
    expect(slide5).toHaveAttribute('aria-hidden', 'true')
    expect(pagination[0]).toHaveAttribute('aria-selected', 'true')
  })
})
