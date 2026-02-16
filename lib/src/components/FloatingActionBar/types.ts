import type { ButtonHTMLAttributes } from 'react'

import type { ButtonProps } from '../Button/types'

export type FloatingActionBarActionsProps = {
  children?: React.ReactNode
  className?: string
  dataTestId?: string
  dropdownClassName?: string
  placement?: 'bottom-end' | 'bottom-start' | 'top-end' | 'top-start'
  size?: 'lg' | 'md'
  variant?: 'primary' | 'secondary' | 'tertiary'
}

export type FloatingActionBarButtonProps = ButtonProps & { icon?: React.ReactNode }

export type FloatingActionBarPaginationProps = {
  buttonNextProps?: ButtonHTMLAttributes<HTMLButtonElement>
  buttonPrevProps?: ButtonHTMLAttributes<HTMLButtonElement>
  className?: string
  dataTestId?: string
  navigationTexts?: {
    nextPage?: string
    previousPage?: string
  }
  onChange?: (page: string) => void
  page: number
  pageCount: number
  size?: 'lg' | 'md'
}

export type FloatingActionBarProps = {
  children?: React.ReactNode
  className?: string
  dataTestId?: string
}
