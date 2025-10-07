import type { ForwardRefProps } from '@/utils'

export interface PaginationOptions {
  buttonNextProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  buttonPrevProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  dataTestId?: string
  getHref?: (page: number | string) => string
  listProps?: React.OlHTMLAttributes<HTMLOListElement>
  onChange: (page: number | string) => void
  page: number
  pageCount: number
  rangeDisplay?: number
}

export type PaginationProps = ForwardRefProps<PaginationOptions, 'nav'>
