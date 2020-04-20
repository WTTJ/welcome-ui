import React, { cloneElement, forwardRef, useEffect, useRef, useState } from 'react'
import { RightIcon } from '@welcome-ui/icons.right'
import { node, oneOfType, string } from 'prop-types'

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
    const wrapperRef = ref || useRef(null)
    const [listRef, setListRef] = useState(useRef(null))
    const [scrollLeft, setScrollLeft] = useState()
    const [scrollRight, setScrollRight] = useState()

    const clones = children.map((child, index) => {
      const isLastChild = children.length === index + 1

      return cloneElement(child, {
        key: `breadcrumb-${index}`,
        separator: isLastChild ? undefined : separator,
        as: isLastChild ? 'span' : renderChildrenAs,
        ...child.props
      })
    })

    function onListScroll() {
      setScrollLeft(listRef.current.scrollLeft)
      setScrollRight(
        listRef.current.scrollWidth - (listRef.current.scrollLeft + listRef.current.clientWidth)
      )
    }

    useEffect(() => {
      setListRef(listRef)

      const scrollToLeft =
        listRef.current.scrollWidth === listRef.current.offsetWidth
          ? undefined
          : listRef.current.scrollWidth

      setTimeout(() => {
        listRef.current.scrollLeft = scrollToLeft
      }, 500)
      setScrollLeft(scrollToLeft)
      setScrollRight(
        listRef.current.scrollWidth - (listRef.current.scrollLeft + listRef.current.clientWidth)
      )
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <S.Breadcrumb as="nav" ref={wrapperRef} {...rest}>
        <S.GradientLeft
          gradientBackground={gradientBackground}
          show={scrollLeft && scrollLeft > 0}
        />
        <S.List onScroll={onListScroll} ref={listRef}>
          {clones}
        </S.List>
        <S.GradientRight
          gradientBackground={gradientBackground}
          show={scrollRight && scrollRight > 0}
        />
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
