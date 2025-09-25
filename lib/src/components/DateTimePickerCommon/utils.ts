import type { Locale, Month } from 'date-fns'
import range from 'lodash.range'

import type { SelectOption, SelectOptions } from '@/components/Select/types'

const MONTHS: {
  label: string
  value: Month
}[] = [
  { label: 'January', value: 0 },
  { label: 'February', value: 1 },
  { label: 'March', value: 2 },
  { label: 'April', value: 3 },
  { label: 'May', value: 4 },
  { label: 'June', value: 5 },
  { label: 'July', value: 6 },
  { label: 'August', value: 7 },
  { label: 'September', value: 8 },
  { label: 'October', value: 9 },
  { label: 'November', value: 10 },
  { label: 'December', value: 11 },
]

export const DEFAULT_DATE = new Date()

export const getDate = (date: Date | number | string, interval = 15): Date => {
  if (!date) {
    return null
  }

  // If invalid date, use today
  let newDate = new Date(date)
  if (isNaN(newDate.getTime())) {
    newDate = new Date()
  }

  // Round to nearest interval
  const nextInterval = Math.ceil(newDate.getMinutes() / interval) * interval
  // Set minutes to nearest interval
  return new Date(newDate.setMinutes(nextInterval, 0, 0))
}

export const getMonths = (locale: Locale): SelectOptions['options'] => {
  if (!locale) {
    return MONTHS
  }

  return MONTHS.map(({ value }) => ({
    label: locale.localize.month(value),
    value,
  }))
}

export const getYears = (startYear: number, endYear: number): SelectOption[] =>
  range(startYear, endYear + 1)
    .map(year => ({
      label: year.toString(),
      value: year,
    }))
    .reverse()
