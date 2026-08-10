import { useCallback, useEffect, useRef } from 'react'

type UseInitialScrollOptions = {
  alignment: 'center' | 'default'
  currentPage: number
  currentSlidesPerView: number
  goTo: (page: number, isFirstInit?: boolean) => void
  initialIndex: number
  numberOfPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  slidesLength: number
}

/**
 * Owns the deferred, one-shot scroll to the initial page and the state flags
 * that keep it from fighting the scroll handler. Returns `consumeSnapBackSkip`,
 * which the scroll handler calls once to swallow the scroll-snap correction
 * that follows our own initial scroll.
 */
export const useInitialScroll = ({
  alignment,
  currentPage,
  currentSlidesPerView,
  goTo,
  initialIndex,
  numberOfPage,
  setCurrentPage,
  slidesLength,
}: UseInitialScrollOptions): (() => boolean) => {
  const hasInitializedRef = useRef(false)
  // Pending frame of the deferred initial scroll, `undefined` once it has run.
  const initFrameRef = useRef<number>()
  // Swallows the scroll-snap correction that follows our own initial scroll.
  const skipSnapBackRef = useRef(false)
  const skipNextPageScrollRef = useRef(false)
  // Read inside the deferred frame so it reflects the viewport-corrected perView.
  const firstPageToShowRef = useRef(0)

  const pageForInitialIndex =
    alignment === 'center'
      ? // if centeredSlides is true, we calculate which number is the middle page
        Math.floor(numberOfPage / 2)
      : // if centeredSlides is false, we calculate on which page the number in firstSlideToShow props is
        Math.ceil(initialIndex / currentSlidesPerView) - 1

  // `initialIndex` is 1-based, so its default of `0` computes to page -1, and a
  // value past the last slide would scroll beyond the end and then fight the
  // `isLastPage` branch of `updatePage`. An explicit `initialIndex: undefined`
  // shadows the default and computes to NaN, so guard that too.
  const firstPageToShow = Number.isFinite(pageForInitialIndex)
    ? Math.min(Math.max(pageForInitialIndex, 0), numberOfPage - 1)
    : 0

  firstPageToShowRef.current = firstPageToShow

  useEffect(() => {
    // Only navigate to the initial page once, when slidesLength is first known.
    // `hasInitializedRef` is set synchronously as it also gates the
    // external-`setCurrentPage` effect below.
    if (!slidesLength || hasInitializedRef.current) {
      return
    }

    hasInitializedRef.current = true

    // The scroll must land after the first paint: issued during the first layout
    // pass it is reverted to 0 by the browser's `scroll-snap-type: x mandatory`
    // correction. One frame is not enough — a callback scheduled from a passive
    // effect still runs before the next paint. The second frame also lets
    // `useViewportSize` commit, so `firstPageToShowRef` is breakpoint-correct.
    initFrameRef.current = requestAnimationFrame(() => {
      initFrameRef.current = requestAnimationFrame(() => {
        initFrameRef.current = undefined

        const initialPage = firstPageToShowRef.current

        // The track already starts on the first page, so it needs no scroll
        if (initialPage <= 0) {
          return
        }

        skipSnapBackRef.current = true
        goTo(initialPage, true)
        // `currentPage` is otherwise only synced by the scroll handler, which we
        // just told to skip this scroll — so set it here, reading the freshest
        // value to arm the redundant-scroll skip only if the page really changes.
        setCurrentPage(current => {
          if (current === initialPage) {
            return current
          }

          skipNextPageScrollRef.current = true

          return initialPage
        })
      })
    })

    return () => {
      if (initFrameRef.current === undefined) {
        return
      }

      // The deferred scroll never ran (unmount, or a StrictMode remount) — let
      // the next mount schedule it again
      cancelAnimationFrame(initFrameRef.current)
      initFrameRef.current = undefined
      hasInitializedRef.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slidesLength])

  // Triggers navigation when currentPage is changed by external setCurrentPage calls
  useEffect(() => {
    if (skipNextPageScrollRef.current) {
      // The initial scroll already put us on this page, no need to scroll again
      skipNextPageScrollRef.current = false

      return
    }

    if (hasInitializedRef.current) {
      goTo(currentPage)
    }
  }, [currentPage, goTo])

  // Swallow exactly one scroll-snap correction following our own initial scroll.
  return useCallback(() => {
    if (skipSnapBackRef.current) {
      skipSnapBackRef.current = false

      return true
    }

    return false
  }, [])
}
