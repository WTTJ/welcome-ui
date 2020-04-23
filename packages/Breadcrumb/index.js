import React, { cloneElement, forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { RightIcon } from '@welcome-ui/icons.right'
import { node, oneOfType, string } from 'prop-types'
import { clamp, throttle } from '@welcome-ui/utils'
import { ResizeObserver } from '@juggle/resize-observer'

import { COMPONENT_TYPE } from '../../src/utils/propTypes'

import { Item } from './Item'
import * as S from './styles'

export const Breadcrumb = forwardRef(
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
    const listRef = useRef()
    const startGradient = useRef()
    const endGradient = useRef()
    const [isOverflowing, setIsOverflowing] = useState(false)
    const [initialOffset, setInitialOffset] = useState()

    const clones = children.map((child, index) => {
      const isLastChild = children.length === index + 1

      return cloneElement(child, {
        key: `breadcrumb-${index}`,
        separator: isLastChild ? undefined : separator,
        as: isLastChild ? 'span' : renderChildrenAs,
        ...child.props
      })
    })

    function translate(element, value) {
      element.style.transform = `scale3d(${value}, 1, 1)`
    }

    const updateGradients = useCallback(completionRatio => {
      const uncompleteRatio = 1 - completionRatio
      translate(startGradient.current, uncompleteRatio)
      translate(endGradient.current, completionRatio)
    }, [])

    const onListScroll = useCallback(() => {
      const {
        current: { offsetWidth, scrollLeft, scrollWidth }
      } = listRef
      const diff = scrollWidth - offsetWidth
      const scroll = clamp(Math.abs(scrollLeft - initialOffset), 0, diff)
      // scroll completion Ratio between 0 (not scrolled) and 1 (fully scrolled)
      const completionRatio = scroll / diff
      updateGradients(completionRatio)
    }, [initialOffset, updateGradients])

    const handleResize = useCallback(
      throttle(
        entries => {
          const [
            {
              target: { offsetWidth, scrollLeft, scrollWidth }
            }
          ] = entries
          const diff = scrollWidth - offsetWidth
          if (!initialOffset) {
            setInitialOffset(scrollLeft === 0 ? 0 : diff)
          }
          setIsOverflowing(diff > 0)
        },
        300,
        { leading: false }
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

Breadcrumb.displayName = 'Breadcrumb'

Breadcrumb.propTypes = /* remove-proptypes */ {
  children: node.isRequired,
  /** color from theme, add for scroll gradient on mobile */
  gradientBackground: string,
  renderChildrenAs: oneOfType(COMPONENT_TYPE),
  separator: oneOfType([node, string])
}

Breadcrumb.Item = Item
