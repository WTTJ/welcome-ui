import React, { useState } from 'react'
import { bool, func, number, object, oneOfType, string } from 'prop-types'

import { getDate } from './utils'
import * as S from './styles'

export const DateTimePicker = ({
  value = new Date(),
  datePickerOnly,
  datePickerProps = {},
  onChange,
  timePickerOnly,
  timePickerProps = {}
}) => {
  // set defaults
  const datePickerDefaultDateFormat = 'dd/MM/yyyy'
  const timePickerDefaultDateFormat = 'HH:mm'
  const defaultTimeIntervals = 15
  const datePickerDateFormat = datePickerProps.dateFormat || datePickerDefaultDateFormat
  const timePickerDateFormat = timePickerProps.dateFormat || timePickerDefaultDateFormat
  const timeIntervals = timePickerProps.timeIntervals || defaultTimeIntervals

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
        />
      )}
    </S.DateTimePicker>
  )
}

DateTimePicker.propTypes = {
  datePickerOnly: bool,
  datePickerProps: object,
  onChange: func,
  timePickerOnly: bool,
  timePickerProps: object,
  value: oneOfType([number, object, string]).isRequired
}
