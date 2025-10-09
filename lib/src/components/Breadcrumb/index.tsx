import { ResizeObserver } from '@juggle/resize-observer'
import React, {
  Children,
  cloneElement,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { Icon } from '@/components/Icon'
import { classNames } from '@/utils'
import { clamp } from '@/utils/clamp'
import { throttle } from '@/utils/throttle'

import breadcrumbStyles from './breadcrumb.module.scss'
import { Item } from './Item'
import type { BreadcrumbProps } from './types'

const cx = classNames(breadcrumbStyles)

export const BreadcrumbComponent = forwardRef<HTMLDivElement, BreadcrumbProps>(
  (
    {
      children,
      lastChildNotClickable = true,
      separator = <Icon name="angle-right-b" size="xs" />,
      ...rest
    },
    ref
  ) => {
    // Remove null child
    const childrenFiltered = Children.toArray(children).filter(Boolean)
    const childrenLength = childrenFiltered.length

    // Add dynamic props to children
    const clones = childrenFiltered.map((child: React.ReactElement, index) => {
      const isLastChild = childrenLength === 1 || childrenLength === index + 1
      const isActive = isLastChild && lastChildNotClickable

      return cloneElement(child, {
        isActive,
        key: `breadcrumb-${index}`,
        separator: isLastChild ? undefined : separator,
        ...child.props,
      })
    })

    // Add scroll gradient on mobile
    const { endGradient, listRef, onListScroll, startGradient } = useGradient()

    return (
      <nav ref={ref} {...rest} className={cx('root', rest.className)}>
        {startGradient}

        <ol className={cx('list')} dir="rtl" onScroll={onListScroll} ref={listRef}>
          {clones.reverse()}
        </ol>

        {endGradient}
      </nav>
    )
  }
)

// Nested exports
export const Breadcrumb = Object.assign(BreadcrumbComponent, {
  Item,
})

// Hook to handle scroll gradient on mobile
const useGradient = () => {
  const listRef = useRef<HTMLOListElement>(null)
  const startGradientRef = useRef()
  const endGradientRef = useRef()
  const [isOverflowing, setIsOverflowing] = useState(false)
  const [initialOffset, setInitialOffset] = useState(0)

  const translate = (element: HTMLElement, value: number) => {
    if (!element) return
    element.style.transform = `scale3d(${value}, 1, 1)`
  }

  // Handlers
  const updateGradients = useCallback((completionRatio: number) => {
    const uncompleteRatio = 1 - completionRatio
    translate(startGradientRef.current, uncompleteRatio)
    translate(endGradientRef.current, completionRatio)
  }, [])

  const onListScroll = useCallback(() => {
    const {
      current: { offsetWidth, scrollLeft, scrollWidth },
    } = listRef
    const diff = scrollWidth - offsetWidth
    const scroll = clamp(Math.abs(scrollLeft - initialOffset), 0, diff)
    // Scroll completion Ratio between 0 (not scrolled) and 1 (fully scrolled)
    const completionRatio = scroll / diff
    updateGradients(completionRatio)
  }, [initialOffset, updateGradients])

  const handleResize = useMemo<(entries: ResizeObserverEntry[]) => void>(
    () =>
      throttle(
        (entries: ResizeObserverEntry[]) => {
          const [
            {
              // Is offsetWidth really needed ?
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              target: { offsetWidth, scrollLeft, scrollWidth },
            },
          ] = entries
          const diff = scrollWidth - offsetWidth
          if (!initialOffset) {
            setInitialOffset(scrollLeft === 0 ? 0 : diff)
          }
          setIsOverflowing(diff > 0)
        },
        300,
        false
      ),
    [initialOffset]
  )

  // Effects
  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(listRef.current)
    return () => resizeObserver.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (startGradientRef.current && endGradientRef.current) {
      updateGradients(0)
    }
  }, [isOverflowing, updateGradients])

  // Components
  const startGradient = isOverflowing ? (
    <span
      className={cx('start-gradient', 'bg-linear-to-r  from-neutral-10 to-transparent')}
      ref={startGradientRef}
    />
  ) : null

  const endGradient = isOverflowing ? (
    <span
      className={cx('end-gradient', 'bg-linear-to-l from-neutral-10 to-transparent')}
      ref={endGradientRef}
    />
  ) : null

  return { endGradient, listRef, onListScroll, startGradient }
}
