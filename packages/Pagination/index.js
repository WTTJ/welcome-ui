/* eslint-disable react/no-multi-comp, react/no-array-index-key, react/jsx-max-depth */
import { func, node, number, string } from 'prop-types'
import React, { forwardRef, useCallback, useMemo, useRef } from 'react'
import { Rover, useRoverState } from 'reakit/Rover'
import { LeftIcon } from '@welcome-ui/icons.left'
import { RightIcon } from '@welcome-ui/icons.right'

import * as S from './styles'

function fill(length, transform) {
  return Array.from({ length }, (_, i) => transform(i))
}

function joinArrays(arrays, separator) {
  return arrays.reduce((all, array, i) => {
    const next = [...all, ...array]
    if (array.length && i < arrays.length - 1) next.push(separator)
    return next
  }, [])
}

const RANGE = 4
function usePages({ page, pageCount, rangeDisplay }) {
  return useMemo(() => {
    if (pageCount <= rangeDisplay) {
      return fill(pageCount, i => i + 1)
    }
    const before = page < RANGE ? fill(Math.min(pageCount, page + 1), i => i + 1) : [1]
    const center =
      page >= RANGE && page <= pageCount - RANGE + 1 ? fill(RANGE - 1, i => i + page - 1) : []
    const after =
      page > pageCount - RANGE + 1
        ? fill(Math.min(RANGE, pageCount - page + RANGE / 2), i => i + page - 1)
        : [pageCount]
    return joinArrays([before, center, after], '-')
  }, [page, pageCount, rangeDisplay])
}

export const Pagination = forwardRef(
  (
    {
      'aria-label': ariaLabel,
      getHref,
      leftArrow,
      onChange,
      page,
      pageCount,
      rangeDisplay = 5,
      rightArrow
    },
    ref
  ) => {
    const rover = useRoverState()
    const pages = usePages({ page, pageCount, rangeDisplay })
    const firstPageRef = useRef()
    const lastPageRef = useRef()
    const handlePrevious = useCallback(
      event => {
        event.preventDefault()
        const previousPage = page - 1
        if (previousPage === 1) {
          firstPageRef.current.focus()
        }
        onChange(previousPage)
      },
      [page, onChange]
    )
    const handleNext = useCallback(
      event => {
        event.preventDefault()
        const nextPage = page + 1
        if (nextPage === pageCount) {
          lastPageRef.current.focus()
        }
        onChange(nextPage)
      },
      [page, pageCount, onChange]
    )

    return (
      <S.Pagination aria-label={ariaLabel} ref={ref} role="navigation">
        <S.List>
          <S.Item hidden={page === 1}>
            <Rover disabled={page === 1} {...rover}>
              {roverProps => (
                <S.AbstractLink
                  {...roverProps}
                  href={getHref && getHref(page - 1)}
                  onClick={handlePrevious}
                >
                  {leftArrow || <LeftIcon size="xs" />}
                </S.AbstractLink>
              )}
            </Rover>
          </S.Item>
          {pages.map((iPage, i) =>
            iPage === '-' ? (
              <S.Item key={`${i}-`}>
                <S.Dots>...</S.Dots>
              </S.Item>
            ) : (
              <S.Item key={iPage}>
                <Rover
                  ref={iPage === 1 ? firstPageRef : iPage === pageCount ? lastPageRef : null}
                  {...rover}
                >
                  {roverProps => (
                    <S.PageLink
                      {...roverProps}
                      aria-current={iPage === page}
                      href={getHref && getHref(iPage)}
                      onClick={event => {
                        event.preventDefault()
                        onChange(iPage)
                      }}
                    >
                      {iPage}
                    </S.PageLink>
                  )}
                </Rover>
              </S.Item>
            )
          )}
          <S.Item hidden={page === pageCount}>
            <Rover disabled={page === pageCount} {...rover}>
              {roverProps => (
                <S.AbstractLink
                  {...roverProps}
                  href={getHref && getHref(page + 1)}
                  onClick={handleNext}
                >
                  {rightArrow || <RightIcon size="xs" />}
                </S.AbstractLink>
              )}
            </Rover>
          </S.Item>
        </S.List>
      </S.Pagination>
    )
  }
)

Pagination.propTypes /* remove-proptypes */ = {
  'aria-label': string.isRequired,
  children: node,
  getHref: func,
  leftArrow: node,
  onChange: func.isRequired,
  page: number.isRequired,
  pageCount: number.isRequired,
  rangeDisplay: number,
  rightArrow: node
}
