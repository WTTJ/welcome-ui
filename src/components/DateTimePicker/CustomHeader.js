import React, { useEffect, useMemo, useState } from 'react'
import { func, number, object, oneOfType, string } from 'prop-types'

import { Button } from '../Button'
import { Icon } from '../Icon'
import { Select } from '../Select'

import * as S from './styles'
import { getMonths, getYears } from './utils'

export const CustomHeader = ({
  changeMonth,
  changeYear,
  date,
  decreaseMonth,
  endYear,
  increaseMonth,
  locale,
  startYear
}) => {
  const [month, setMonth] = useState(null)
  const [year, setYear] = useState(null)

  const months = useMemo(() => getMonths(locale), [locale])
  const years = getYears(startYear, endYear)

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
        shape="circle"
        size="xs"
        title="Previous month"
        variant="secondary"
      >
        <Icon name="left" size="xs" />
      </Button>
      <Select onChange={changeMonth} options={months} size="sm" value={month} />
      <Select onChange={changeYear} options={years} size="sm" value={year} />
      <Button
        disabled={month === months[months.length - 1].label && year === endYear}
        onClick={increaseMonth}
        shape="circle"
        size="xs"
        title="Next month"
        variant="secondary"
      >
        <Icon name="right" size="xs" />
      </Button>
    </S.CustomHeader>
  )
}

CustomHeader.displayName = 'CustomHeader'

CustomHeader.propTypes = {
  changeMonth: func,
  changeYear: func,
  date: oneOfType([number, object, string]).isRequired,
  decreaseMonth: func,
  endYear: number,
  increaseMonth: func,
  locale: object,
  startYear: number
}
