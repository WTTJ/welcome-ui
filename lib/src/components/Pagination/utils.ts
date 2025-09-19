import { useMemo } from 'react'

const RANGE = 5
const CENTER_RANGE = 3

type Position = 'after' | 'before' | 'center'

interface usePagesProps {
  page: number
  pageCount: number
  rangeDisplay: number
}

export function usePages({ page, pageCount, rangeDisplay }: usePagesProps): Array<number | string> {
  return useMemo(() => {
    if (pageCount <= rangeDisplay || pageCount <= RANGE + 1) {
      return fill(pageCount, i => i + 1)
    }

    const position = getPosition(page, pageCount)

    const before = position === 'before' ? fill(RANGE, i => i + 1) : [1]
    const center = position === 'center' ? fill(CENTER_RANGE, i => i + page - 1) : []
    const after = position === 'after' ? fill(RANGE, i => i + pageCount - RANGE + 1) : [pageCount]
    return joinArrays([before, center, after], '-')
  }, [page, pageCount, rangeDisplay])
}

function fill(length: number, transform: (arg: number) => number): number[] {
  return Array.from({ length }, (_, i) => transform(i))
}

function getPosition(page: number, pageCount: number): Position {
  if (page < RANGE) return 'before'
  if (page >= RANGE && page <= pageCount - RANGE + 1) return 'center'
  if (page > pageCount - RANGE + 1) return 'after'
  return 'center'
}

function joinArrays(arrays: number[][], separator: string): Array<number | string> {
  return arrays.reduce((all: Array<number | string>, array: number[], i: number) => {
    const next = []
    next.push(...all)
    next.push(...array)
    if (array.length && i < arrays.length - 1) next.push(separator)
    return next
  }, [])
}
