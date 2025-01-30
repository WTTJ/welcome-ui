import React, {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ResizeObserver } from '@juggle/resize-observer'
import { Theme } from '@xstyled/styled-components'

import { clamp } from '../../utils/clamp'
import { throttle } from '../../utils/throttle'

import { Item } from './Item'
import * as S from './styles'

import { CreateWuiProps, forwardRef } from '@/System'
import { RightIcon } from '@/Icons'

type Colors = Theme['colors']

export interface BreadcrumbOptions {
  children: React.ReactNode | React.ReactNode[]
  /** color from theme, add for scroll gradient on mobile */
  gradientBackground?: Colors
  /** set clickable or not the last child */
  lastChildNotClickable?: boolean
  separator?: string | React.ReactNode
}

export type BreadcrumbProps = CreateWuiProps<'div', BreadcrumbOptions>

export const BreadcrumbComponent = forwardRef<'div', BreadcrumbProps>(
  (
    {
      children,
      gradientBackground = 'neutral-10',
      lastChildNotClickable = true,
      separator = <RightIcon size="xs" />,
      ...rest
    },
    ref
  ) => {
    const listRef = useRef<HTMLOListElement>(null)
    const startGradient = useRef()
    const endGradient = useRef()
    const [isOverflowing, setIsOverflowing] = useState(false)
    const [initialOffset, setInitialOffset] = useState(0)
    /** removed null child */
    const childrenFiltered = Children.toArray(children).filter(Boolean)
    const childrenLength = childrenFiltered.length

    const clones = childrenFiltered.map((child: React.ReactElement, index) => {
      const isLastChild = childrenLength === 1 || childrenLength === index + 1
      const isActive = isLastChild && lastChildNotClickable

      return cloneElement(child, {
        // eslint-disable-next-line react/no-array-index-key
        key: `breadcrumb-${index}`,
        separator: isLastChild ? undefined : separator,
        isActive,
        ...child.props,
      })
    })

    function translate(element: HTMLElement, value: number) {
      if (!element) return
      element.style.transform = `scale3d(${value}, 1, 1)`
    }

    const updateGradients = useCallback((completionRatio: number) => {
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
          <S.StartGradient gradientBackground={gradientBackground as Colors} ref={startGradient} />
        )}
        <S.List dir="rtl" onScroll={onListScroll} ref={listRef}>
          {clones.reverse()}
        </S.List>
        {isOverflowing && (
          <S.EndGradient gradientBackground={gradientBackground as Colors} ref={endGradient} />
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
