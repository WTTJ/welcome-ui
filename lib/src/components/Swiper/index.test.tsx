import { screen } from '@testing-library/react'
import { useState } from 'react'

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

  describe('rendering', () => {
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
  })

  describe('navigation', () => {
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

    it('should navigate when calling setCurrentPage directly from store', async () => {
      const TestManualNavigation = () => {
        const swiper = useSwiper()
        return (
          <>
            <Swiper store={swiper}>
              <Swiper.Slides>
                <div>page1</div>
                <div>page2</div>
              </Swiper.Slides>
            </Swiper>
            <button onClick={() => swiper.slides.setCurrentPage(1)}>Go to page 2</button>
          </>
        )
      }

      const { user } = render(<TestManualNavigation />)
      const slide2 = screen.getByText('page2')
      const navButton = screen.getByText('Go to page 2')

      expect(slide2).toHaveAttribute('aria-hidden', 'true')

      await user.click(navButton)

      expect(slide2).toHaveAttribute('aria-hidden', 'false')
      expect(scrollToSpy).toHaveBeenCalled()
    })

    it('should stay on last slide when loop is disabled', async () => {
      const TestNoWrapWhenLoopDisabled = () => {
        const [currentPage, setCurrentPage] = useState(2)

        return (
          <Swiper
            store={{
              autoplay: { duration: 5000, enabled: false, loop: false },
              navigation: { desktop: true, mobile: true },
              slides: {
                alignment: 'default',
                currentPage,
                currentSlidesPerView: 1,
                expandOnLargeScreens: false,
                gap: 20,
                id: 'swiper',
                initialIndex: 0,
                perView: { desktop: 1, mobile: 1, tablet: 1 },
                setCurrentPage,
              },
            }}
          >
            <Swiper.Slides>
              <div>page1</div>
              <div>page2</div>
              <div>page3</div>
            </Swiper.Slides>
            <Swiper.NextButton />
          </Swiper>
        )
      }

      render(<TestNoWrapWhenLoopDisabled />)

      window.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight' }))

      expect(scrollToSpy).toHaveBeenLastCalledWith({ behavior: 'smooth', left: 40, top: 0 })
    })
  })
})
