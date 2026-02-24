import { screen } from '@testing-library/react'

import { render } from '@tests'

import { Swiper, useSwiper } from './'

const TestSwiper = () => {
  const swiper = useSwiper()

  return (
    <Swiper data-testid="swiper" store={swiper}>
      <Swiper.Slides>
        <div>page1</div>
        <div>page2</div>
        <div>page3</div>
      </Swiper.Slides>
      <Swiper.PrevButton />
      <Swiper.NextButton />
    </Swiper>
  )
}

const TestSwiperWithLoop = () => {
  const swiper = useSwiper({ autoplay: { enabled: true, loop: true } })

  return (
    <Swiper data-testid="swiper" store={swiper}>
      <Swiper.Slides>
        <div>page1</div>
        <div>page2</div>
        <div>page3</div>
      </Swiper.Slides>
      <Swiper.PrevButton />
      <Swiper.NextButton />
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

    render(<TestSwiper />)
    // Arrange
    const slide1 = screen.getByText('page1')
    const slide2 = screen.getByText('page2')
    const slide3 = screen.getByText('page3')
    const prevButton = screen.getByLabelText('Previous slide')
    const nextButton = screen.getByLabelText('Next slide')

    // Assert
    expect(prevButton).toHaveAttribute('aria-disabled', 'true')
    expect(nextButton).toBeEnabled()
    expect(slide1).toHaveAttribute('aria-hidden', 'false')
    expect(slide2).toHaveAttribute('aria-hidden', 'true')
    expect(slide3).toHaveAttribute('aria-hidden', 'true')
  })

  it('should render correctly when on last page', () => {
    // Set values to have last page context
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { value: 896 })
    Object.defineProperty(HTMLElement.prototype, 'scrollWidth', { value: 2688 })
    Object.defineProperty(HTMLElement.prototype, 'scrollLeft', { value: 1792 })

    render(<TestSwiper />)
    // Arrange
    const prevButton = screen.getByLabelText('Previous slide')
    const nextButton = screen.getByLabelText('Next slide')
    // Assert
    expect(prevButton).toBeEnabled()
    expect(nextButton).toHaveAttribute('aria-disabled', 'true')
  })

  describe('with loop', () => {
    it('should have arrow buttons enabled and call scrollTo when clicking on it', async () => {
      const { user } = render(<TestSwiperWithLoop />)

      // Arrange
      const prevButton = screen.getByLabelText('Previous slide')
      const nextButton = screen.getByLabelText('Next slide')

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
