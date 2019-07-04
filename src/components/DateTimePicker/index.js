import React, { useState } from 'react'
import { bool, func, number, object, oneOfType, string } from 'prop-types'

import { SIZES_TYPE } from '../../utils/propTypes'

import { getDate } from './utils'
import * as S from './styles'

const DEFAULT_INTERVAL = 15
const DEFAULT_DATE_FORMAT = 'dd/MM/yyyy'
const DEFAULT_TIME_FORMAT = 'HH:mm'

export const DateTimePicker = ({
  value = new Date(),
  datePickerOnly,
  datePickerProps = {},
  onChange,
  size = 'lg',
  timePickerOnly,
  timePickerProps = {}
}) => {
  // Set defaults
  const datePickerDateFormat = datePickerProps.dateFormat || DEFAULT_DATE_FORMAT
  const timePickerDateFormat = timePickerProps.dateFormat || DEFAULT_TIME_FORMAT
  const timeIntervals = timePickerProps.timeIntervals || DEFAULT_INTERVAL

  const [focusedInput, setFocusedInput] = useState(
    (datePickerProps.autoFocus && 'date') || (timePickerProps.autoFocus && 'time') || null
  )

  const [newDate, setNewDate] = useState(getDate(value, timeIntervals))

  const focusOn = (kind, e) => {
    let onDatePickerFocus = datePickerProps.onFocus
    let onTimePickerFocus = timePickerProps.onFocus
    setFocusedInput(kind)
    kind === 'date' && onDatePickerFocus && onDatePickerFocus(e)
    kind === 'time' && onTimePickerFocus && onTimePickerFocus(e)
  }

  const handleChange = (newDate, kind) => {
    if (!newDate) return
    const date = getDate(newDate, timeIntervals)

    if (kind === 'date') {
      newDate = newDate.setHours(date.getHours(), date.getMinutes())
    }
    if (kind === 'time') {
      newDate = newDate.setFullYear(date.getFullYear(), date.getMonth(), date.getDate())
    }
    setNewDate(newDate)
    onChange && onChange(new Date(newDate))
  }

  const clickOutside = () => setFocusedInput(null)

  return (
    <S.DateTimePicker
      data-testid="dateTimePicker"
      datePickerOnly={datePickerOnly}
      focusedInput={focusedInput}
      timePickerOnly={timePickerOnly}
    >
      {!timePickerOnly && (
        <S.DatePicker
          calendarClassName="date-picker-popper"
          className="date-picker"
          dateFormat={datePickerDateFormat}
          {...datePickerProps}
          onChange={date => handleChange(date, 'date')}
          onClickOutside={clickOutside}
          onFocus={e => focusOn('date', e)}
          selected={newDate}
          size={size}
        />
      )}
      {!datePickerOnly && (
        <S.TimePicker
          calendarClassName="time-picker-popper"
          className="time-picker"
          dateFormat={timePickerDateFormat}
          timeIntervals={timeIntervals}
          {...timePickerProps}
          onChange={time => handleChange(time, 'time')}
          onClickOutside={clickOutside}
          onFocus={e => focusOn('time', e)}
          selected={newDate}
          showTimeSelect
          showTimeSelectOnly
          size={size}
        />
      )}
    </S.DateTimePicker>
  )
}

DateTimePicker.propTypes = {
  datePickerOnly: bool,
  datePickerProps: object,
  onChange: func,
  size: SIZES_TYPE,
  timePickerOnly: bool,
  timePickerProps: object,
  value: oneOfType([number, object, string]).isRequired
}
