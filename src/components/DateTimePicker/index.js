import React, { useState } from 'react'
import { bool, func, number, object, oneOfType, string } from 'prop-types'
import 'react-datepicker/dist/react-datepicker.css'

import * as S from './styles'

export const DateTimePicker = ({
  date,
  datePickerOnly,
  datePickerProps = {},
  onChange,
  timePickerOnly,
  timePickerProps = {}
}) => {
  // set defaults
  const datePickerDateFormat = datePickerProps.dateFormat || 'dd/MM/yyyy'
  const timePickerDateFormat = timePickerProps.dateFormat || 'HH:mm'
  const timeIntervals = timePickerProps.timeIntervals || 15

  const getDate = newDate => {
    let minutes = new Date(newDate).getMinutes()
    let minutesToPreviousInterval = minutes % timeIntervals
    let nextMinutesInterval =
      minutes - minutesToPreviousInterval + (minutesToPreviousInterval === 0 ? 0 : timeIntervals)
    let nextDateInterval = new Date(newDate).setMinutes(nextMinutesInterval, 0, 0)

    return date ? new Date(nextDateInterval) : undefined
  }

  const [focusedInput, setFocusedInput] = useState(
    (datePickerProps.autoFocus && 'date') || (timePickerProps.autoFocus && 'time') || null
  )
  const [newDate, setNewDate] = useState(getDate(date))

  const focusOn = (kind, e) => {
    let onDatePickerFocus = datePickerProps.onFocus
    let onTimePickerFocus = timePickerProps.onFocus
    setFocusedInput(kind)
    kind === 'date' && onDatePickerFocus && onDatePickerFocus(e)
    kind === 'time' && onTimePickerFocus && onTimePickerFocus(e)
  }

  const handleChange = (newDate, kind) => {
    const date = getDate(newDate)

    if (kind === 'date') {
      newDate = newDate.setHours(date.getHours(), date.getMinutes())
    }
    if (kind === 'time') {
      newDate = newDate.setFullYear(date.getFullYear(), date.getMonth(), date.getDate())
    }
    setNewDate(newDate)
    setFocusedInput(null)
    onChange && onChange(new Date(newDate))
  }

  const clickOutside = () => setFocusedInput(null)

  return (
    <S.DateTimePicker
      datePickerOnly={datePickerOnly}
      focusedInput={focusedInput}
      timePickerOnly={timePickerOnly}
    >
      {!timePickerOnly && (
        <S.DatePicker
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
          dateFormat={timePickerDateFormat}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={timeIntervals}
          {...timePickerProps}
          onChange={time => handleChange(time, 'time')}
          onClickOutside={clickOutside}
          onFocus={e => focusOn('time', e)}
          selected={newDate}
        />
      )}
    </S.DateTimePicker>
  )
}

DateTimePicker.propTypes = {
  date: oneOfType([number, object, string]).isRequired,
  datePickerOnly: bool,
  datePickerProps: object,
  onChange: func,
  timePickerOnly: bool,
  timePickerProps: object
}
