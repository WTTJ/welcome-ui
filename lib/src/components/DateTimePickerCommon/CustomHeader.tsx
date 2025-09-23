import React, { useEffect, useMemo, useState } from 'react'

import { Button } from '@/components/Button'
import { LeftIcon, RightIcon } from '@/components/Icon'
import { Select } from '@/components/Select'
import { classNames } from '@/utils'

import dateTimePickerCommonStyles from './date-time-picker-common.module.scss'
import type { CustomHeaderProps } from './types'
import { getMonths, getYears } from './utils'

const cx = classNames(dateTimePickerCommonStyles)

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
    <div className={cx('header')}>
      <Button
        disabled={isPreviousDisabled}
        onClick={isMonthYearPicker ? decreaseYear : decreaseMonth}
        shape="square"
        title={`Previous ${isMonthYearPicker ? 'year' : 'month'}`}
        variant="tertiary"
      >
        <LeftIcon className="mr-xxs" />
      </Button>
      <div className={cx('selects')}>
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
        <Select
          id="year"
          name="year"
          onChange={changeYear}
          options={years}
          size="sm"
          value={year}
        />
      </div>
      <Button
        disabled={isNextDisabled}
        onClick={isMonthYearPicker ? increaseYear : increaseMonth}
        shape="square"
        title={`Next ${isMonthYearPicker ? 'year' : 'month'}`}
        variant="tertiary"
      >
        <RightIcon className="ml-xxs" />
      </Button>
    </div>
  )
}
