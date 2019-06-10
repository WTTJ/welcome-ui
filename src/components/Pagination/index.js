import { func, node, number } from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'

import { Icon } from '../Icon'
import { useKeyboardEvent, useRefElement } from '../../utils/hooks'

import { PageItem } from './item'
import * as S from './styles'

export const Pagination = ({
  defaultPage = 1,
  leftArrow,
  onChange,
  pageCount,
  rangeDisplay = 5,
  rightArrow
}) => {
  const [activePage, setActivePage] = useState(defaultPage)
  // set target element
  const [targetElm, setTargetElm] = useState(null)
  const targetRef = useRefElement(setTargetElm, true)
  const activeRef = useRef()

  const handlePrevPage = () => {
    if (activePage > 1) {
      handleChange(activePage - 1)
    }
  }

  const handleNextPage = () => {
    if (activePage < pageCount) {
      handleChange(activePage + 1)
    }
  }

  const handleChange = page => {
    onChange(page)
    setActivePage(page)
  }

  const getPageNumberBefore = () => {
    // when pageCount is above rangeDisplay, we show all the pages
    if (pageCount <= rangeDisplay) {
      return Array(pageCount)
        .fill(0)
        .map((e, i) => i + 1)
    }
    // when is page 1 show [1, 2]
    else if (activePage === 1) {
      return Array(2)
        .fill(0)
        .map((e, i) => i + 1)
    } else {
      // when activePage is equal to pageCount show only 2 last pages
      // else show page before, active and page after activePage
      const numberOfArray = activePage === pageCount ? 2 : 3
      return Array(numberOfArray)
        .fill(activePage)
        .map((e, i) => {
          return activePage + i - 1
        })
    }
  }

  /** accessibility **/
  useKeyboardEvent('ArrowLeft', handlePrevPage, targetElm)
  useKeyboardEvent('ArrowRight', handleNextPage, targetElm)
  // add correct focus when activePage change
  useEffect(() => {
    activeRef && activeRef.current.focus()
  }, [activePage])

  // when defaultPage property change from parent, we set new active page
  useEffect(() => {
    setActivePage(defaultPage)
  }, [defaultPage])

  const numberOfPagesEnding = getPageNumberBefore()[getPageNumberBefore().length - 1]
  const getFirstPageNumber = getPageNumberBefore()[0]

  return (
    <S.Pagination ref={targetRef}>
      {activePage > 1 && (
        <li>
          <S.ArrowItemLeft onClick={handlePrevPage}>
            {leftArrow || <Icon name="left" size="xs" />}
          </S.ArrowItemLeft>
        </li>
      )}
      {getFirstPageNumber > 1 && (
        <PageItem
          activePage={activePage}
          handleChange={handleChange}
          page={1}
          ref={activePage === 1 ? activeRef : null}
        />
      )}
      {getFirstPageNumber > 2 && <S.Dots>...</S.Dots>}
      {getPageNumberBefore().map(page => (
        <PageItem
          activePage={activePage}
          handleChange={handleChange}
          key={`page_${page}`}
          page={page}
          ref={activePage === page ? activeRef : null}
        />
      ))}
      {numberOfPagesEnding < pageCount - 1 && <S.Dots>...</S.Dots>}
      {numberOfPagesEnding < pageCount && (
        <PageItem
          activePage={activePage}
          handleChange={handleChange}
          page={pageCount}
          ref={activePage === pageCount ? activeRef : null}
        />
      )}
      {activePage < pageCount && (
        <li>
          <S.ArrowItemRight onClick={handleNextPage}>
            {rightArrow || <Icon name="right" size="xs" />}
          </S.ArrowItemRight>
        </li>
      )}
    </S.Pagination>
  )
}

Pagination.propTypes = {
  /** page by default */
  defaultPage: number,
  /** add custom item for left arrow */
  leftArrow: node,
  /** function who return page selected */
  onChange: func.isRequired,
  /** number of pages */
  pageCount: number.isRequired,
  /** after this range we start using ellipsis  */
  rangeDisplay: number,
  /** add custom item for left arrow */
  rightArrow: node
}
