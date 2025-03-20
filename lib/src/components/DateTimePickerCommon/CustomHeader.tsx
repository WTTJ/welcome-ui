import type { Locale } from 'date-fns'

import React, { useEffect, useMemo, useState } from 'react'

import { Button } from '@/Button'
import { LeftIcon, RightIcon } from '@/Icons'
import { Select } from '@/Select'
import type { CreateWuiProps } from '@/System'

import * as S from './styles'
import { getMonths, getYears } from './utils'

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

export type CustomHeaderProps = CreateWuiProps<'div', CustomHeaderOptions>

export const CustomHeader: React.FC<CustomHeaderProps> = ({
  changeMonth,
  changeYear,
  date,
  decreaseMonth,
  decreaseYear,
  endYear,
  increaseMonth,
  increaseYear,
  isMonthYearPicker,
  locale,
  startYear,
}) => {
  const [month, setMonth] = useState<null | string>(null)
  const [year, setYear] = useState<null | number>(null)

  const months = useMemo(() => getMonths(locale), [locale])
  const years = useMemo(() => getYears(startYear, endYear), [startYear, endYear])

  const isPreviousDisabled = isMonthYearPicker
    ? year === startYear
    : month === months[0].label && year === startYear
  const isNextDisabled = isMonthYearPicker
    ? year === endYear
    : month === months[months.length - 1].label && year === endYear

  useEffect(() => {
    const currentDate = new Date(date)
    const currentMonth = months[currentDate.getMonth()].label
    const currentYear = currentDate.getFullYear()
    setMonth(currentMonth)
    setYear(currentYear)
  }, [date, months])

  return (
    <S.CustomHeader>
      <Button
        disabled={isPreviousDisabled}
        onClick={isMonthYearPicker ? decreaseYear : decreaseMonth}
        shape="square"
        title={`Previous ${isMonthYearPicker ? 'year' : 'month'}`}
        variant="tertiary"
      >
        <LeftIcon mr={2} />
      </Button>
      <S.Selects>
        {!isMonthYearPicker && (
          <Select
            id="month"
            name="month"
            onChange={changeMonth}
            options={months}
            size="sm"
            value={month || ''}
          />
        )}
        <Select
          id="year"
          name="year"
          onChange={changeYear}
          options={years}
          size="sm"
          value={year || ''}
        />
      </S.Selects>
      <Button
        disabled={isNextDisabled}
        onClick={isMonthYearPicker ? increaseYear : increaseMonth}
        shape="square"
        title={`Next ${isMonthYearPicker ? 'year' : 'month'}`}
        variant="tertiary"
      >
        <RightIcon ml={2} />
      </Button>
    </S.CustomHeader>
  )
}

CustomHeader.displayName = 'CustomHeader'
