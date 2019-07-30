import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { bool, func, number, object, oneOfType, string } from 'prop-types'

import { COMPONENT_TYPE, SIZES_TYPE } from '../../utils'

import { CustomInput } from './CustomInput'
import { getDate } from './utils'
import * as S from './styles'

const DEFAULT_INTERVAL = 15
const DEFAULT_DATE_FORMAT = 'dd/MM/yyyy'
const DEFAULT_TIME_FORMAT = 'HH:mm'

const PopperPortal = ({ children }) =>
  typeof window !== 'undefined'
    ? createPortal(<S.Popper>{children}</S.Popper>, document.querySelector('body'))
    : null

export const DateTimePicker = ({
  value = new Date(),
  dateIcon,
  datePickerOnly,
  datePickerProps = {},
  onChange,
  size = 'lg',
  timeIcon,
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

  const [date, setDate] = useState(null)

  const formatDate = date => getDate(date, timeIntervals)

  // format date at component mount
  useEffect(() => {
    onChange && onChange(formatDate(value))
    //eslint-disable-next-line
  }, [])

  // Ensure values are controlled by parent
  useEffect(() => {
    const formattedDate = formatDate(value)
    if (value - formattedDate !== 0 && onChange) {
      onChange(formattedDate)
    }
    setDate(formattedDate)
    //eslint-disable-next-line
  }, [value])

  const handleFocus = (kind, e) => {
    let onDatePickerFocus = datePickerProps.onFocus
    let onTimePickerFocus = timePickerProps.onFocus
    setFocusedInput(kind)
    kind === 'date' && onDatePickerFocus && onDatePickerFocus(e)
    kind === 'time' && onTimePickerFocus && onTimePickerFocus(e)
  }

  const handleBlur = (kind, e) => {
    let onDatePickerBlur = datePickerProps.onBlur
    let onTimePickerBlur = timePickerProps.onBlur
    setFocusedInput(null)
    kind === 'date' && onDatePickerBlur && onDatePickerBlur(e)
    kind === 'time' && onTimePickerBlur && onTimePickerBlur(e)
  }

  const handleChange = (newDate, kind) => {
    if (!newDate) return
    const date = formatDate(newDate)

    if (kind === 'date') {
      newDate = newDate.setHours(date.getHours(), date.getMinutes())
    }
    if (kind === 'time') {
      newDate = newDate.setFullYear(date.getFullYear(), date.getMonth(), date.getDate())
    }
    setDate(newDate)
    onChange && onChange(new Date(newDate))
  }

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
          customInput={<CustomInput icon={dateIcon} size={size} />}
          popperContainer={PopperPortal}
          {...datePickerProps}
          dateFormat={datePickerDateFormat}
          onBlur={e => handleBlur('date', e)}
          onChange={date => handleChange(date, 'date')}
          onFocus={e => handleFocus('date', e)}
          selected={date}
          size={size}
        />
      )}
      {!datePickerOnly && (
        <S.TimePicker
          calendarClassName="time-picker-popper"
          className="time-picker"
          customInput={<CustomInput icon={timeIcon} size={size} />}
          popperContainer={PopperPortal}
          {...timePickerProps}
          dateFormat={timePickerDateFormat}
          onBlur={e => handleBlur('time', e)}
          onChange={time => handleChange(time, 'time')}
          onFocus={e => handleFocus('time', e)}
          selected={date}
          showTimeSelect
          showTimeSelectOnly
          size={size}
          timeIntervals={timeIntervals}
        />
      )}
    </S.DateTimePicker>
  )
}

DateTimePicker.propTypes = {
  dateIcon: COMPONENT_TYPE,
  datePickerOnly: bool,
  datePickerProps: object,
  onChange: func,
  size: SIZES_TYPE,
  timeIcon: COMPONENT_TYPE,
  timePickerOnly: bool,
  timePickerProps: object,
  value: oneOfType([number, object, string]).isRequired
}
