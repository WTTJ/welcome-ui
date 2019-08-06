import React, { forwardRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { bool, func, number, object, oneOf, oneOfType, string } from 'prop-types'

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

export const DateTimePicker = forwardRef(
  (
    {
      value = new Date(),
      dateIcon,
      dateIconPlacement = 'left',
      datePickerOnly,
      datePickerProps = {},
      onChange,
      size = 'lg',
      timeIcon,
      timeIconPlacement = 'left',
      timePickerOnly,
      timePickerProps = {},
      ...rest
    },
    ref
  ) => {
    // Set defaults
    const datePickerDateFormat = datePickerProps.dateFormat || DEFAULT_DATE_FORMAT
    const timePickerDateFormat = timePickerProps.dateFormat || DEFAULT_TIME_FORMAT
    const timeIntervals = timePickerProps.timeIntervals || DEFAULT_INTERVAL

    const [focused, setFocused] = useState(
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
      setFocused(kind)
      kind === 'date' && onDatePickerFocus && onDatePickerFocus(e)
      kind === 'time' && onTimePickerFocus && onTimePickerFocus(e)
    }

    const handleBlur = (kind, e) => {
      let onDatePickerBlur = datePickerProps.onBlur
      let onTimePickerBlur = timePickerProps.onBlur
      setFocused(null)
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
        timePickerOnly={timePickerOnly}
        {...rest}
      >
        {!timePickerOnly && (
          <S.DatePicker
            calendarClassName="date-picker-popper"
            className="date-picker"
            customInput={
              <CustomInput
                focused={focused}
                handleBlur={e => handleBlur('date', e)}
                handleFocus={e => handleFocus('date', e)}
                icon={dateIcon}
                iconPlacement={dateIconPlacement}
                inputRef={timePickerOnly ? null : ref}
                ref={ref}
                size={size}
              />
            }
            popperContainer={PopperPortal}
            {...datePickerProps}
            dateFormat={datePickerDateFormat}
            onChange={date => handleChange(date, 'date')}
            selected={date}
            size={size}
            {...rest}
          />
        )}
        {!datePickerOnly && (
          <S.TimePicker
            calendarClassName="time-picker-popper"
            className="time-picker"
            customInput={
              <CustomInput
                focused={focused}
                handleBlur={e => handleBlur('date', e)}
                handleFocus={e => handleFocus('date', e)}
                icon={timeIcon}
                iconPlacement={timeIconPlacement}
                inputRef={timePickerOnly ? ref : null}
                size={size}
              />
            }
            popperContainer={PopperPortal}
            {...timePickerProps}
            dateFormat={timePickerDateFormat}
            onChange={time => handleChange(time, 'time')}
            selected={date}
            showTimeSelect
            showTimeSelectOnly
            size={size}
            timeIntervals={timeIntervals}
            {...rest}
          />
        )}
      </S.DateTimePicker>
    )
  }
)

DateTimePicker.displayName = 'DateTimePicker'

DateTimePicker.propTypes = {
  dateIcon: COMPONENT_TYPE,
  dateIconPlacement: oneOf('right', 'left'),
  datePickerOnly: bool,
  datePickerProps: object,
  onChange: func,
  size: SIZES_TYPE,
  timeIcon: COMPONENT_TYPE,
  timeIconPlacement: oneOf('right', 'left'),
  timePickerOnly: bool,
  timePickerProps: object,
  value: oneOfType([number, object, string]).isRequired
}
