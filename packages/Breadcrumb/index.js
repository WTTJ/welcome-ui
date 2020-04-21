import React, {
  cloneElement,
  forwardRef,
  useCallback,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
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
    const listRef = ref || useRef()
    const listWidth = listRef && listRef.current && listRef.current.scrollWidth

    const [isAtStart, setIsAtStart] = useState(false)
    const [isAtEnd, setIsAtEnd] = useState(true)

    const clones = children.map((child, index) => {
      const isLastChild = children.length === index + 1

      return cloneElement(child, {
        key: `breadcrumb-${index}`,
        separator: isLastChild ? undefined : separator,
        as: isLastChild ? 'span' : renderChildrenAs,
        ...child.props
      })
    })

    const onListScroll = useCallback(() => {
      const {
        current: { clientWidth, scrollLeft, scrollWidth }
      } = listRef

      setIsAtStart(scrollLeft === 0)
      setIsAtEnd(scrollWidth - (scrollLeft + clientWidth) === 0)
    }, [listRef])

    useLayoutEffect(() => {
      onListScroll()
      setTimeout(() => {
        listRef.current.scrollTo(10000, 0)
      }, 200)
    }, [listRef, listWidth, onListScroll])

    return (
      <S.Breadcrumb
        as="nav"
        gradientBackground={gradientBackground}
        isAtEnd={isAtEnd}
        isAtStart={isAtStart}
        {...rest}
      >
        <S.List onScroll={onListScroll} ref={listRef}>
          {clones}
        </S.List>
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
