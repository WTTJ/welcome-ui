import type { Locale } from 'date-fns'
import type { HTMLAttributes } from 'react'

import type { MergeProps } from '@/utils'

/* CustomHeader types */
export interface CustomHeaderOptions {
  changeMonth: () => void
  changeYear: () => void
  date: Date
  decreaseMonth?: () => void
  decreaseYear?: () => void
  endYear: number
  increaseMonth?: () => void
  increaseYear?: () => void
  isMonthYearPicker?: boolean
  locale?: Locale
  startYear: number
}

export type CustomHeaderProps = MergeProps<CustomHeaderOptions, HTMLAttributes<HTMLDivElement>>

/* CustomInput types */

export interface CustomInputOptions {
  focused: Focused
  handleBlur?: (event: React.FocusEvent<HTMLDivElement>) => void
  handleFocus?: (event: React.FocusEvent<HTMLDivElement>) => void
  icon?: Icon
  iconPlacement?: IconPlacement
  onReset?: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: CustomInputSize
  value?: null | string
}

export type CustomInputProps = CustomInputOptions &
  Omit<React.ComponentProps<'input'>, keyof CustomInputOptions>
export type Focused = 'date' | 'time' | null
export type Icon = JSX.Element

export type IconPlacement = 'left' | 'right'

type CustomInputSize = 'lg' | 'md' | 'sm' | 'xs'
