import { useEffect, useMemo, useState } from 'react'

import { Button } from '@/components/Button'
import { LeftIcon, RightIcon } from '@/components/Icon'
import { Select } from '@/components/Select'
import { classNames } from '@/utils'

import styles from './date-time-picker.module.scss'
import type { CustomHeaderProps } from './types'
import { getMonths, getYears } from './utils'

const cx = classNames(styles)

export const CustomHeader = ({
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
}: CustomHeaderProps) => {
  const [month, setMonth] = useState(null)
  const [year, setYear] = useState(null)

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
    <div className={cx('custom-header')}>
      <Button
        disabled={isPreviousDisabled}
        onClick={isMonthYearPicker ? decreaseYear : decreaseMonth}
        shape="square"
        size="xs"
        title={`Previous ${isMonthYearPicker ? 'year' : 'month'}`}
        variant="tertiary"
      >
        <LeftIcon size="xs" />
      </Button>
      {!isMonthYearPicker && (
        <Select
          id="month"
          name="month"
          onChange={changeMonth}
          options={months}
          size="sm"
          value={month}
        />
      )}
      <Select id="year" name="year" onChange={changeYear} options={years} size="sm" value={year} />
      <Button
        disabled={isNextDisabled}
        onClick={isMonthYearPicker ? increaseYear : increaseMonth}
        shape="square"
        size="xs"
        title={`Next ${isMonthYearPicker ? 'year' : 'month'}`}
        variant="tertiary"
      >
        <RightIcon size="xs" />
      </Button>
    </div>
  )
}
