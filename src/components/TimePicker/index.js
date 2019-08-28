import React, { forwardRef, useEffect, useState } from 'react'
import { bool, func, number, object, oneOf, oneOfType, string } from 'prop-types'

import { COMPONENT_TYPE, SIZES_TYPE } from '../../utils'
import { getDate } from '../DateTimePicker/utils'
import { CustomInput } from '../DateTimePicker/CustomInput'
import { DatePickerPopper } from '../DatePickerPopper'

import * as S from './styles'

const DEFAULT_INTERVAL = 15
const DEFAULT_FORMAT = 'HH:mm'

export const TimePicker = forwardRef(
  (
    {
      autoFocus,
      dateFormat = DEFAULT_FORMAT,
      value = new Date(),
      onBlur,
      onChange,
      onFocus,
      size = 'lg',
      icon,
      iconPlacement = 'left',
      inputRef,
      timeIntervals = DEFAULT_INTERVAL,
      ...rest
    },
    ref
  ) => {
    const [focused, setFocused] = useState((autoFocus && 'time') || null)
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

    const handleFocus = e => {
      setFocused('time')
      onFocus && onFocus(e)
    }

    const handleBlur = e => {
      setFocused(null)
      onBlur && onBlur(e)
    }

    const handleChange = newDate => {
      if (!newDate) return
      const date = formatDate(newDate)

      newDate = newDate.setFullYear(date.getFullYear(), date.getMonth(), date.getDate())
      setDate(newDate)
      onChange && onChange(new Date(newDate))
    }

    return (
      <S.TimePicker
        calendarClassName="time-picker-popper"
        className="time-picker"
        customInput={
          <CustomInput
            focused={focused}
            handleBlur={e => handleBlur('date', e)}
            handleFocus={handleFocus}
            icon={icon}
            iconPlacement={iconPlacement}
            inputRef={inputRef || ref}
            size={size}
          />
        }
        data-testid="timePicker"
        dateFormat={dateFormat}
        onChange={handleChange}
        popperContainer={DatePickerPopper}
        selected={date}
        showTimeSelect
        showTimeSelectOnly
        size={size}
        timeIntervals={timeIntervals}
        {...rest}
      />
    )
  }
)

TimePicker.displayName = 'TimePicker'

TimePicker.propTypes = {
  autoFocus: bool,
  dateFormat: string,
  icon: COMPONENT_TYPE,
  iconPlacement: oneOf('right', 'left'),
  inputRef: func,
  onBlur: func,
  onChange: func,
  onFocus: func,
  size: SIZES_TYPE,
  timeIntervals: number,
  value: oneOfType([number, object, string]).isRequired
}
