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
import { clamp, throttle } from '@welcome-ui/utils'
import { ResizeObserver } from '@juggle/resize-observer'
import { RightIcon } from '@welcome-ui/icons.right'
import { WuiProps } from '@welcome-ui/system'
import { WuiTheme } from '@welcome-ui/core'

import { Item } from './Item'
import * as S from './styles'

export type Colors = WuiTheme['colors']

export interface BreadcrumbOptions {
  children: React.ReactNode | React.ReactNode[]
  /** color from theme, add for scroll gradient on mobile */
  gradientBackground?: Colors
  renderChildrenAs?: string | React.ReactNode
  separator?: string | React.ReactNode
}

export type BreadcrumbProps = BreadcrumbOptions & WuiProps

interface Entry {
  target: HTMLElement
}

export const BreadcrumbComponent = forwardRef<HTMLDivElement, BreadcrumbProps>(
  (
    {
      renderChildrenAs = 'a',
      children,
      separator = <RightIcon size="sm" />,
      gradientBackground = 'light.900',
      ...rest
    },
    ref
  ) => {
    const listRef = useRef<HTMLOListElement>(null)
    const startGradient = useRef()
    const endGradient = useRef()
    const [isOverflowing, setIsOverflowing] = useState(false)
    const [initialOffset, setInitialOffset] = useState(0)
    const childrenLength = Children.toArray(children).length

    const clones = Children.map(children, (child: React.ReactElement, index) => {
      const isLastChild = childrenLength === 1 || childrenLength === index + 1

      return cloneElement(child, {
        key: `breadcrumb-${index}`,
        separator: isLastChild ? undefined : separator,
        as: isLastChild ? 'span' : renderChildrenAs,
        ...child.props,
      })
    })

    function translate(element: HTMLElement, value: number) {
      element.style.transform = `scale3d(${value}, 1, 1)`
    }

    const updateGradients = useCallback(completionRatio => {
      const uncompleteRatio = 1 - completionRatio
      translate(startGradient.current, uncompleteRatio)
      translate(endGradient.current, completionRatio)
    }, [])

    const onListScroll = useCallback(() => {
      const {
        current: { offsetWidth, scrollLeft, scrollWidth },
      } = listRef
      const diff = scrollWidth - offsetWidth
      const scroll = clamp(Math.abs(scrollLeft - initialOffset), 0, diff)
      // scroll completion Ratio between 0 (not scrolled) and 1 (fully scrolled)
      const completionRatio = scroll / diff
      updateGradients(completionRatio)
    }, [initialOffset, updateGradients])

    const handleResize = useMemo(
      () =>
        throttle(
          (entries: Entry[]) => {
            const [
              {
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

    useEffect(() => {
      const resizeObserver = new ResizeObserver(handleResize)
      resizeObserver.observe(listRef.current)
      return () => resizeObserver.disconnect()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
      if (startGradient.current && endGradient.current) {
        updateGradients(0)
      }
    }, [isOverflowing, updateGradients])

    return (
      <S.Breadcrumb as="nav" ref={ref} {...rest}>
        {isOverflowing && (
          <S.StartGradient gradientBackground={gradientBackground} ref={startGradient} />
        )}
        <S.List dir="rtl" onScroll={onListScroll} ref={listRef}>
          {clones.reverse()}
        </S.List>
        {isOverflowing && (
          <S.EndGradient gradientBackground={gradientBackground} ref={endGradient} />
        )}
      </S.Breadcrumb>
    )
  }
)

BreadcrumbComponent.displayName = 'Breadcrumb'

// Nested exports
export const Breadcrumb = Object.assign(BreadcrumbComponent, {
  Item,
})
