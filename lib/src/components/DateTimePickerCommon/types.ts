import type { Locale } from 'date-fns'
import type { ComponentProps } from 'react'
import type { ReactDatePickerCustomHeaderProps } from 'react-datepicker'

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

export type CustomHeaderProps = ComponentProps<'div'> &
  CustomHeaderOptions &
  ReactDatePickerCustomHeaderProps
