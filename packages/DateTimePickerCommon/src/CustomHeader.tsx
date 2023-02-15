import React, { useEffect, useMemo, useState } from 'react'
import { Button } from '@welcome-ui/button'
import { LeftIcon, RightIcon } from '@welcome-ui/icons'
import { Select } from '@welcome-ui/select'
import { Locale } from 'date-fns'
import { CreateWuiProps } from '@welcome-ui/system'

import * as S from './styles'
import { getMonths, getYears } from './utils'

export interface CustomHeaderOptions {
  changeMonth: () => void
  changeYear: () => void
  date: Date
  decreaseMonth?: () => void
  endYear: number
  increaseMonth?: () => void
  locale?: Locale
  startYear: number
}

export type CustomHeaderProps = CreateWuiProps<'div', CustomHeaderOptions>

export const CustomHeader: React.FC<CustomHeaderProps> = ({
  changeMonth,
  changeYear,
  date,
  decreaseMonth,
  endYear,
  increaseMonth,
  locale,
  startYear,
}) => {
  const [month, setMonth] = useState(null)
  const [year, setYear] = useState(null)

  const months = useMemo(() => getMonths(locale), [locale])
  const years = useMemo(() => getYears(startYear, endYear), [startYear, endYear])

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
        disabled={month === months[0].label && year === startYear}
        onClick={decreaseMonth}
        shape="square"
        title="Previous month"
        variant="tertiary"
      >
        <LeftIcon mr={2} />
      </Button>
      <S.Selects>
        <Select
          id="month"
          name="month"
          onChange={changeMonth}
          options={months}
          size="sm"
          value={month}
        />
        <Select
          id="year"
          name="year"
          onChange={changeYear}
          options={years}
          size="sm"
          value={year}
        />
      </S.Selects>
      <Button
        disabled={month === months[months.length - 1].label && year === endYear}
        onClick={increaseMonth}
        shape="square"
        title="Next month"
        variant="tertiary"
      >
        <RightIcon ml={2} />
      </Button>
    </S.CustomHeader>
  )
}

CustomHeader.displayName = 'CustomHeader'
