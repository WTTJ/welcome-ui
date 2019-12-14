import React, { forwardRef, useEffect, useState } from 'react'
import {
  bool,
  elementType,
  func,
  number,
  object,
  oneOf,
  oneOfType,
  shape,
  string
} from 'prop-types'
import {
  CustomHeader,
  CustomInput,
  CustomPopper,
  DEFAULT_DATE,
  getDate
} from '@welcome-ui/date-time-picker'

import { COMPONENT_TYPE, SIZES_TYPE } from '../Core/utils/propTypes'

import * as S from './styles'

export const DatePicker = forwardRef(
  (
    {
      autoFocus,
      dataTestId,
      dateFormat = 'dd/MM/yyyy',
      endYear = DEFAULT_DATE.getFullYear(),
      icon,
      iconPlacement = 'left',
      inputRef,
      locale,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      popperProps,
      size = 'lg',
      startYear = 1900,
      useWeekdaysShort = true,
      value = DEFAULT_DATE,
      ...rest
    },
    ref
  ) => {
    const formatDate = date => getDate(date, 15)
    const placeholderText = placeholder || rest.placeholderText

    const [focused, setFocused] = useState((autoFocus && 'date') || null)
    const [date, setDate] = useState(formatDate(value))
    const inputReference = inputRef || ref

    // format date at component mount
    useEffect(() => {
      onChange && onChange(formatDate(value))
      //eslint-disable-next-line
    }, [])

    // Ensure values are controlled by parent
    useEffect(() => {
      const formattedDate = formatDate(value)
      if (new Date(Date.parse(value)) - formattedDate !== 0 && onChange) {
        onChange(formattedDate)
      }
      setDate(formattedDate)
      //eslint-disable-next-line
    }, [value])

    const blur = () => inputReference.current.blur()

    const handleFocus = e => {
      setFocused('date')
      onFocus && onFocus(e)
    }

    const handleBlur = e => {
      setFocused(null)
      onBlur && onBlur(e)
    }

    const handleKeyDown = e => {
      if (['Escape', 'Enter'].includes(e.key)) {
        blur()
      }
    }

    const handleReset = e => {
      e.preventDefault()
      blur()
      setDate(null)
      onChange && onChange()
    }

    const handleChange = newDate => {
      if (!newDate) return
      const date = formatDate(newDate)

      newDate = newDate.setHours(date.getHours(), date.getMinutes())
      setDate(newDate)
      onChange && onChange(new Date(newDate))
    }

    return (
      <S.DatePicker
        autoComplete="off"
        calendarClassName="date-picker-popper"
        customInput={
          <CustomInput
            className="date-picker"
            data-testid={dataTestId}
            focused={focused}
            handleBlur={e => handleBlur('date', e)}
            handleFocus={e => handleFocus('date', e)}
            icon={icon}
            iconPlacement={iconPlacement}
            inputRef={inputReference}
            onReset={handleReset}
            size={size}
          />
        }
        dateFormat={dateFormat}
        locale={locale}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholderText={placeholderText}
        popperContainer={CustomPopper}
        popperProps={popperProps}
        renderCustomHeader={props => (
          <CustomHeader endYear={endYear} locale={locale} startYear={startYear} {...props} />
        )}
        selected={date}
        size={size}
        useWeekdaysShort={useWeekdaysShort}
        {...rest}
        isClearable={false}
      />
    )
  }
)

DatePicker.displayName = 'DatePicker'

DatePicker.propTypes = {
  autoFocus: bool,
  dateFormat: string,
  endYear: number,
  icon: oneOfType(COMPONENT_TYPE),
  iconPlacement: oneOf(['right', 'left']),
  inputRef: shape({ current: elementType }),
  locale: object,
  onBlur: func,
  onChange: func,
  onFocus: func,
  placeholder: string,
  popperProps: object,
  size: oneOf(SIZES_TYPE),
  startYear: number,
  useWeekdaysShort: bool,
  value: oneOfType([number, object, string]).isRequired
}

export const StyledDatePicker = S.DatePicker

export default DatePicker
