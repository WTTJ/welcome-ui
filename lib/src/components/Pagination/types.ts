import type { ComponentPropsWithRef } from 'react'

export interface PaginationOptions {
  dataTestId?: string
  getHref?: (page: number | string) => string
  onChange: (page: number | string) => void
  page: number
  pageCount: number
  rangeDisplay?: number
}

export type PaginationProps = ComponentPropsWithRef<'nav'> & PaginationOptions
