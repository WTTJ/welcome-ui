import { act, fireEvent, screen } from '@testing-library/react'

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
  })

  describe('autoplay', () => {
    const TestSwiperAutoplay = ({
      duration = 1000,
      loop = false,
    }: {
      duration?: number
      loop?: boolean
    }) => {
      const swiper = useSwiper({ autoplay: { duration, enabled: true, loop } })

      return (
        <>
          <Swiper store={swiper}>
            <Swiper.Slides>
              <div>page1</div>
              <div>page2</div>
              <div>page3</div>
            </Swiper.Slides>
          </Swiper>
          <button onClick={() => swiper.slides.setCurrentPage(2)}>go to last</button>
        </>
      )
    }

    it('should auto-advance to the next page after the duration elapses', () => {
      vi.useFakeTimers()

      render(<TestSwiperAutoplay />)

      act(() => {
        vi.advanceTimersByTime(1000)
      })

      // From page 0, one tick calls goNext -> goTo(1): left 1 * (0 + 20) * 1
      expect(scrollToSpy).toHaveBeenLastCalledWith({ behavior: 'smooth', left: 20, top: 0 })

      vi.useRealTimers()
    })

    it('should loop back to the first page when auto-advancing past the last', () => {
      vi.useFakeTimers()

      render(<TestSwiperAutoplay loop />)

      // Jump to the last page first
      act(() => {
        fireEvent.click(screen.getByText('go to last'))
      })

      act(() => {
        vi.advanceTimersByTime(1000)
      })

      // goNext on the last page with loop enabled -> goTo(0)
      expect(scrollToSpy).toHaveBeenLastCalledWith({ behavior: 'smooth', left: 0, top: 0 })

      vi.useRealTimers()
    })
  })

  describe('keyboard', () => {
    it('should navigate with the arrow keys', () => {
      render(<TestSwiper />)

      fireEvent.keyDown(window, { code: 'ArrowRight' })

      // goNext from page 0 -> goTo(1): left 1 * (0 + 20) * 1
      expect(scrollToSpy).toHaveBeenLastCalledWith({ behavior: 'smooth', left: 20, top: 0 })

      const callsBeforePrev = scrollToSpy.mock.calls.length
      fireEvent.keyDown(window, { code: 'ArrowLeft' })

      // goPrev is wired to ArrowLeft
      expect(scrollToSpy.mock.calls.length).toBeGreaterThan(callsBeforePrev)
    })

    it('should loop to the last page on ArrowLeft from the first when looping', () => {
      const TestLoopKeyboard = () => {
        const swiper = useSwiper({ autoplay: { enabled: true, loop: true } })

        return (
          <Swiper store={swiper}>
            <Swiper.Slides>
              <div>page1</div>
              <div>page2</div>
              <div>page3</div>
            </Swiper.Slides>
          </Swiper>
        )
      }

      render(<TestLoopKeyboard />)

      fireEvent.keyDown(window, { code: 'ArrowLeft' })

      // goPrev on the first page with loop -> goTo(numberOfPage - 1): left 2 * 20
      expect(scrollToSpy).toHaveBeenLastCalledWith({ behavior: 'smooth', left: 40, top: 0 })
    })
  })

  describe('single slide', () => {
    it('should disable both arrows when there is only one slide', () => {
      Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
        configurable: true,
        value: 896,
      })
      Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
        configurable: true,
        value: 896,
      })

      const TestSingleSlide = () => {
        const swiper = useSwiper()

        return (
          <Swiper store={swiper}>
            <Swiper.Slides>
              <div>only</div>
            </Swiper.Slides>
            <Swiper.PrevButton />
            <Swiper.NextButton />
          </Swiper>
        )
      }

      render(<TestSingleSlide />)

      expect(screen.getByLabelText('Previous slide')).toHaveAttribute('aria-disabled', 'true')
      expect(screen.getByLabelText('Next slide')).toHaveAttribute('aria-disabled', 'true')
    })
  })

  // These tests pin the contract, they cannot reproduce the bug they guard
  // against: jsdom has no layout and no scroll snapping, `getBoundingClientRect`
  // always reports a width of 0, and `ResizeObserver` is stubbed out globally in
  // tests/setup.ts (so `useViewportSize` never resolves). What they cover is that
  // the initial scroll is deferred, that the target page is clamped, that state
  // is synced without a second scroll, and that the one-shot snap guard neither
  // swallows a user scroll nor wedges navigation.
  describe('initialIndex', () => {
    const TestSwiperWithInitialIndex = ({ initialIndex }: { initialIndex?: number }) => {
      const swiper = useSwiper({ slides: { initialIndex } })

      return (
        <Swiper store={swiper}>
          <Swiper.Slides>
            <div>page1</div>
            <div>page2</div>
            <div>page3</div>
          </Swiper.Slides>
        </Swiper>
      )
    }

    let requestAnimationFrameSpy: ReturnType<typeof vi.spyOn>
    let cancelAnimationFrameSpy: ReturnType<typeof vi.spyOn>

    /** Runs frames synchronously, so init lands inside `render`'s `act` */
    const useSyncAnimationFrames = () => {
      requestAnimationFrameSpy = vi
        .spyOn(window, 'requestAnimationFrame')
        .mockImplementation(callback => {
          callback(0)

          return 0
        })
      cancelAnimationFrameSpy = vi
        .spyOn(window, 'cancelAnimationFrame')
        .mockImplementation(() => {})
    }

    /** Captures frames instead of running them, so deferral is observable */
    const useCapturedAnimationFrames = () => {
      const frames: FrameRequestCallback[] = []

      requestAnimationFrameSpy = vi
        .spyOn(window, 'requestAnimationFrame')
        .mockImplementation(callback => {
          frames.push(callback)

          return frames.length
        })
      cancelAnimationFrameSpy = vi
        .spyOn(window, 'cancelAnimationFrame')
        .mockImplementation(() => {})

      return {
        flush: () => {
          const pending = frames.splice(0, frames.length)

          act(() => {
            pending.forEach(callback => callback(0))
          })
        },
      }
    }

    beforeEach(() => {
      scrollToSpy.mockClear()
    })

    afterEach(() => {
      // Restore these two specifically: `Element.prototype.scrollTo` is assigned
      // in the outer `beforeAll` and `scrollToSpy` is shared across the file, so
      // a blanket restore would break the tests above.
      requestAnimationFrameSpy?.mockRestore()
      cancelAnimationFrameSpy?.mockRestore()
      vi.useRealTimers()

      // undo the per-test geometry stubs
      Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { value: 0 })
      Object.defineProperty(HTMLElement.prototype, 'scrollWidth', { value: 0 })
    })

    it('should scroll to the page holding the initial slide', () => {
      useSyncAnimationFrames()

      render(<TestSwiperWithInitialIndex initialIndex={2} />)

      // initialIndex is 1-based, so slide 2 with 1 slide per view is page 1.
      // childWidth is 0 in jsdom, gap is 20, hence left: 1 * (0 + 20) * 1
      expect(scrollToSpy).toHaveBeenCalledWith({ behavior: 'auto', left: 20, top: 0 })
      expect(screen.getByText('page1')).toHaveAttribute('aria-hidden', 'true')
      expect(screen.getByText('page2')).toHaveAttribute('aria-hidden', 'false')
    })

    it('should defer the initial scroll until after the first paint', () => {
      const { flush } = useCapturedAnimationFrames()

      render(<TestSwiperWithInitialIndex initialIndex={2} />)

      expect(scrollToSpy).not.toHaveBeenCalled()

      // First frame only schedules the second one
      flush()

      expect(scrollToSpy).not.toHaveBeenCalled()

      flush()

      expect(scrollToSpy).toHaveBeenCalledWith({ behavior: 'auto', left: 20, top: 0 })
    })

    it('should not scroll when the initial slide is already the first one', () => {
      useSyncAnimationFrames()

      render(<TestSwiperWithInitialIndex />)

      // The default initialIndex of 0 computes to page -1 before clamping
      expect(scrollToSpy).not.toHaveBeenCalled()
      expect(screen.getByText('page1')).toHaveAttribute('aria-hidden', 'false')
    })

    it('should clamp an initial slide past the last page', () => {
      useSyncAnimationFrames()

      render(<TestSwiperWithInitialIndex initialIndex={99} />)

      // 3 slides, 1 per view, so the last page is 2: left: 2 * (0 + 20) * 1
      expect(scrollToSpy).toHaveBeenCalledWith({ behavior: 'auto', left: 40, top: 0 })
      expect(screen.getByText('page3')).toHaveAttribute('aria-hidden', 'false')
    })

    it('should still follow user scrolls after the initial one', () => {
      vi.useFakeTimers()
      useSyncAnimationFrames()

      render(<TestSwiperWithInitialIndex initialIndex={2} />)

      const track = screen.getByRole('list')

      // Consumes the one-shot guard
      fireEvent.scroll(track)
      act(() => {
        vi.advanceTimersByTime(150)
      })

      // A genuine scroll back to the first page, with enough geometry for
      // updatePage to take its non-last-page branch
      Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
        configurable: true,
        value: 896,
      })
      Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
        configurable: true,
        value: 2688,
      })
      fireEvent.scroll(track)
      act(() => {
        vi.advanceTimersByTime(150)
      })

      expect(screen.getByText('page1')).toHaveAttribute('aria-hidden', 'false')
      expect(screen.getByText('page2')).toHaveAttribute('aria-hidden', 'true')
    })
  })
})
