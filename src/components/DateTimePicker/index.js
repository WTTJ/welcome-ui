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

  const [focusedInput, setFocusedInput] = useState()
  const [newDate, setNewDate] = useState(getDate(date))

  const focusOn = kind => setFocusedInput(kind)

  const handleChange = (newDate, kind) => {
    const date = getDate(newDate)

    if (kind === 'date') {
      newDate = newDate.setHours(date.getHours(), date.getMinutes())
    }
    if (kind === 'time') {
      newDate = newDate.setFullYear(date.getFullYear(), date.getMonth(), date.getDate())
    }
    setNewDate(newDate)
    onChange && onChange(new Date(newDate))
  }

  const onBlur = () => {
    setFocusedInput()
  }

  return (
    <S.DateTimePicker
      datePickerOnly={datePickerOnly}
      focusedInput={focusedInput}
      onBlur={onBlur}
      timePickerOnly={timePickerOnly}
    >
      {!timePickerOnly && (
        <S.DatePicker
          dateFormat={datePickerDateFormat}
          onChange={date => handleChange(date, 'date')}
          onFocus={() => focusOn('date')}
          selected={newDate}
          {...datePickerProps}
        />
      )}
      {!datePickerOnly && (
        <S.TimePicker
          dateFormat={timePickerDateFormat}
          onChange={time => handleChange(time, 'time')}
          onFocus={() => focusOn('time')}
          selected={newDate}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={timeIntervals}
          {...timePickerProps}
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
