import React, { cloneElement, forwardRef, useEffect, useState } from 'react'
import { bool, func, node, number, object, oneOf, oneOfType, string } from 'prop-types'
import { DatePicker } from '@welcome-ui/date-picker'
import { TimePicker } from '@welcome-ui/time-picker'
import { DEFAULT_DATE, getDate } from '@welcome-ui/date-time-picker-common'

import { SIZES_TYPE } from '../../utils/propTypes'

import * as S from './styles'

export const DateTimePicker = forwardRef(
  (
    { children, dataTestId, disabled, locale, onChange, size = 'lg', value = DEFAULT_DATE },
    ref
  ) => {
    const formatDate = date => getDate(date, 15)

    const [date, setDate] = useState(formatDate(value))

    const handleChange = newDate => {
      setDate(newDate || null)
      onChange && onChange(newDate && new Date(newDate))
    }

    // format date at component mount
    useEffect(() => {
      onChange && handleChange(formatDate(value))
      //eslint-disable-next-line
    }, [])

    // Ensure values are controlled by parent
    useEffect(() => {
      const formattedDate = formatDate(value)
      if (new Date(value) - formattedDate !== 0 && onChange) {
        handleChange(formattedDate)
      }
      setDate(formattedDate)
      //eslint-disable-next-line
    }, [value])

    return (
      <S.DateTimePicker data-testid={dataTestId} size={size}>
        {children &&
          children.map((child, i) =>
            cloneElement(child, {
              key: i,
              onChange: handleChange,
              // give ref only to the first child
              inputRef: i < 1 ? ref : null,
              locale: locale,
              value: date,
            })
          )}
        {!children && (
          <>
            <DatePicker
              disabled={disabled}
              inputRef={ref}
              locale={locale}
              onChange={handleChange}
              size={size}
              value={value}
            />
            <TimePicker
              disabled={disabled}
              locale={locale}
              onChange={handleChange}
              size={size}
              value={value}
            />
          </>
        )}
      </S.DateTimePicker>
    )
  }
)

DateTimePicker.displayName = 'DateTimePicker'

DateTimePicker.propTypes /* remove-proptypes */ = {
  children: node,
  disabled: bool,
  locale: object,
  onChange: func,
  size: oneOf(SIZES_TYPE),
  value: oneOfType([number, object, string]),
}
