import React, { forwardRef, useEffect, useState } from 'react'
import { bool, func, number, object, oneOf, oneOfType, string } from 'prop-types'
import { CustomInput, CustomPopper, DEFAULT_DATE, getDate } from '@welcome-ui/date-time-picker'

import { COMPONENT_TYPE, SIZES_TYPE } from '../Core/utils/propTypes'

import * as S from './styles'

export const TimePicker = forwardRef(
  (
    {
      autoFocus,
      dataTestId,
      dateFormat = 'HH:mm',
      value = DEFAULT_DATE,
      onBlur,
      onChange,
      onFocus,
      size = 'lg',
      icon,
      iconPlacement = 'left',
      inputRef,
      placeholder,
      popperProps,
      timeIntervals = 15,
      ...rest
    },
    ref
  ) => {
    const formatDate = date => getDate(date, timeIntervals)
    const placeholderText = placeholder || rest.placeholderText

    const [focused, setFocused] = useState((autoFocus && 'time') || null)
    const [date, setDate] = useState(formatDate(value))

    // format date at component mount
    useEffect(() => {
      onChange && onChange(formatDate(value))
      //eslint-disable-next-line
    }, [])

    // Ensure values are controlled by parent
    useEffect(() => {
      const formattedDate = formatDate(value)
      if (new Date(value) - formattedDate !== 0 && onChange) {
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

    const handleReset = e => {
      e.preventDefault()
      setDate(null)
      onChange && onChange()
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
        customInput={
          <CustomInput
            className="time-picker"
            data-testid={dataTestId}
            focused={focused}
            handleBlur={e => handleBlur('date', e)}
            handleFocus={handleFocus}
            icon={icon}
            iconPlacement={iconPlacement}
            inputRef={inputRef || ref}
            onReset={handleReset}
            size={size}
          />
        }
        dateFormat={dateFormat}
        onChange={handleChange}
        placeholderText={placeholderText}
        popperContainer={CustomPopper}
        popperProps={popperProps}
        selected={date}
        showTimeSelect
        showTimeSelectOnly
        size={size}
        timeIntervals={timeIntervals}
        {...rest}
        isClearable={false}
      />
    )
  }
)

TimePicker.displayName = 'TimePicker'

TimePicker.propTypes = {
  autoFocus: bool,
  dateFormat: string,
  icon: oneOfType(COMPONENT_TYPE),
  iconPlacement: oneOf(['right', 'left']),
  inputRef: func,
  onBlur: func,
  onChange: func,
  onFocus: func,
  placeholder: string,
  popperProps: object,
  size: oneOf(SIZES_TYPE),
  timeIntervals: number,
  value: oneOfType([number, object, string]).isRequired
}

export const StyledTimePicker = S.TimePicker
