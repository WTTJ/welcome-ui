import React from 'react'

import { render } from '../../../../tests'
import { Swiper, useSwiper } from '../'

const TestSwiper = () => {
  const swiper = useSwiper()

  return (
    <Swiper dataTestId="swiper" store={swiper}>
      <div>page1</div>
      <div>page2</div>
      <div>page3</div>
    </Swiper>
  )
}

const TestSwiperWithNoPagination = () => {
  const swiper = useSwiper({ slidesPerView: { mobile: 1, tablet: 1, desktop: 3 } })

  return (
    <Swiper dataTestId="swiper" store={swiper}>
      <div>page1</div>
      <div>page2</div>
      <div>page3</div>
    </Swiper>
  )
}

const TestSwiperWithLoop = () => {
  const swiper = useSwiper({ loop: true })

  return (
    <Swiper dataTestId="swiper" store={swiper}>
      <div>page1</div>
      <div>page2</div>
      <div>page3</div>
    </Swiper>
  )
}

// test 3 slides with 2 slides per view

describe('<Swiper>', () => {
  const scrollToSpy = vi.fn()

  beforeAll(() => {
    Element.prototype.scrollTo = scrollToSpy
  })

  afterEach(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, value: 0 })
    Object.defineProperty(HTMLElement.prototype, 'scrollLeft', { configurable: true, value: 0 })
    Object.defineProperty(HTMLElement.prototype, 'scrollWidth', { configurable: true, value: 0 })
  })

  it('should render correctly with no props', () => {
    const { container } = render(<TestSwiper />)

    expect(container).toHaveTextContent('page1')
  })

  it('should render correctly at init', () => {
    // Set values to have first page context
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { value: 896 })
    Object.defineProperty(HTMLElement.prototype, 'scrollWidth', { value: 2688 })

    const { container, getByTestId, getByText } = render(<TestSwiper />)
    // Arrange
    const slide1 = getByText('page1')
    const slide2 = getByText('page2')
    const slide3 = getByText('page3')
    const pagination = container.querySelectorAll('[role=tab]')
    const prevButton = getByTestId('swiper-prev-button')
    const nextButton = getByTestId('swiper-next-button')

    // Assert
    expect(prevButton).toBeDisabled()
    expect(nextButton).toBeEnabled()
    expect(slide1).toHaveAttribute('aria-hidden', 'false')
    expect(slide2).toHaveAttribute('aria-hidden', 'true')
    expect(slide3).toHaveAttribute('aria-hidden', 'true')
    expect(pagination[0]).toHaveAttribute('aria-selected', 'true')
    expect(pagination[1]).toHaveAttribute('aria-selected', 'false')
    expect(pagination[2]).toHaveAttribute('aria-selected', 'false')
  })

  it('should render correctly when on last page', () => {
    // Set values to have last page context
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { value: 896 })
    Object.defineProperty(HTMLElement.prototype, 'scrollWidth', { value: 2688 })
    Object.defineProperty(HTMLElement.prototype, 'scrollLeft', { value: 1792 })

    const { getByTestId } = render(<TestSwiper />)
    // Arrange
    const prevButton = getByTestId('swiper-prev-button')
    const nextButton = getByTestId('swiper-next-button')

    // Assert
    expect(prevButton).toBeEnabled()
    expect(nextButton).toBeDisabled()
  })

  it('should render without navigation when same number of slides than slides per view', () => {
    const { container, getByTestId, getByText } = render(<TestSwiperWithNoPagination />)

    // Arrange
    const slide1 = getByText('page1')
    const slide2 = getByText('page2')
    const slide3 = getByText('page3')
    const pagination = container.querySelectorAll('[role=tab]')
    const prevButton = getByTestId('swiper-prev-button')
    const nextButton = getByTestId('swiper-next-button')

    // Assert
    expect(prevButton).toBeDisabled()
    expect(nextButton).toBeDisabled()
    expect(slide1).toHaveAttribute('aria-hidden', 'false')
    expect(slide2).toHaveAttribute('aria-hidden', 'false')
    expect(slide3).toHaveAttribute('aria-hidden', 'false')
    expect(pagination).toHaveLength(0)
  })

  it('should call scrollTo function when clicking on bullet page button', async () => {
    const { container, user } = render(<TestSwiper />)
    // Arrange
    const pagination = container.querySelectorAll('[role=tab]')

    // Act
    await user.click(pagination[2])

    // Assert
    expect(scrollToSpy).toHaveBeenLastCalledWith({ behavior: 'smooth', left: 40, top: 0 })

    // Act
    await user.click(pagination[1])

    // Assert
    expect(scrollToSpy).toHaveBeenLastCalledWith({ behavior: 'smooth', left: 20, top: 0 })
  })

  describe('with loop', () => {
    it('should have arrow buttons enabled and call scrollTo when clicking on it', async () => {
      const { getByTestId, user } = render(<TestSwiperWithLoop />)

      // Arrange
      const prevButton = getByTestId('swiper-prev-button')
      const nextButton = getByTestId('swiper-next-button')

      // Assert
      expect(prevButton).toBeEnabled()
      expect(nextButton).toBeEnabled()

      // Act
      await user.click(prevButton)

      // Assert
      expect(scrollToSpy).toHaveBeenLastCalledWith({ behavior: 'smooth', left: 40, top: 0 })

      // Act
      await user.click(nextButton)

      // Assert
      expect(scrollToSpy).toHaveBeenLastCalledWith({ behavior: 'smooth', left: 20, top: 0 })
    })
  })
})
