import type { ForwardRefProps } from '@/utils'

export interface NavigationTexts {
  firstPage?: string
  lastPage?: string
  nextPage?: string
  previousPage?: string
}

export interface PaginationOptions {
  buttonFirstProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  buttonLastProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  buttonNextProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  buttonPrevProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  dataTestId?: string
  getHref?: (page: number | string) => string
  listProps?: React.OlHTMLAttributes<HTMLOListElement>
  navigationTexts?: NavigationTexts
  onChange: (page: number | string) => void
  page: number
  pageCount: number
  rangeDisplay?: number
  showEdgeControls?: boolean
  size?: 'lg' | 'md'
}

export type PaginationProps = ForwardRefProps<PaginationOptions, 'nav'>
