import React, { forwardRef, useEffect, useState } from 'react'
import { bool, func, number, object, oneOf, oneOfType, string } from 'prop-types'

import { COMPONENT_TYPE, SIZES_TYPE } from '../../utils'
import { CustomInput } from '../DateTimePicker/CustomInput'
import { getDate } from '../DateTimePicker/utils'
import { DatePickerPopper } from '../DatePickerPopper'

import * as S from './styles'

const DEFAULT_FORMAT = 'dd/MM/yyyy'

export const DatePicker = forwardRef(
  (
    {
      autoFocus,
      dateFormat = DEFAULT_FORMAT,
      icon,
      iconPlacement = 'left',
      inputRef,
      onBlur,
      onChange,
      onFocus,
      size = 'lg',
      value = new Date(),
      ...rest
    },
    ref
  ) => {
    const [focused, setFocused] = useState((autoFocus && 'date') || null)
    const [date, setDate] = useState(null)

    const formatDate = date => getDate(date, 15)

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
      setFocused('date')
      onFocus && onFocus(e)
    }

    const handleBlur = e => {
      setFocused(null)
      onBlur && onBlur(e)
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
        calendarClassName="date-picker-popper"
        className="date-picker"
        customInput={
          <CustomInput
            focused={focused}
            handleBlur={e => handleBlur('date', e)}
            handleFocus={e => handleFocus('date', e)}
            icon={icon}
            iconPlacement={iconPlacement}
            inputRef={inputRef || ref}
            size={size}
          />
        }
        data-testid="datePicker"
        dateFormat={dateFormat}
        onChange={handleChange}
        popperContainer={DatePickerPopper}
        selected={date}
        size={size}
        {...rest}
      />
    )
  }
)

DatePicker.displayName = 'DatePicker'

DatePicker.propTypes = {
  autoFocus: bool,
  dateFormat: string,
  icon: COMPONENT_TYPE,
  iconPlacement: oneOf('right', 'left'),
  inputRef: func,
  onBlur: func,
  onChange: func,
  onFocus: func,
  size: SIZES_TYPE,
  value: oneOfType([number, object, string]).isRequired
}
