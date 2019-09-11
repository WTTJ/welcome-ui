import React, { cloneElement, forwardRef, useEffect, useState } from 'react'
import { func, node, number, object, oneOfType, string } from 'prop-types'

import { SIZES_TYPE } from '../../utils'
import { getDate } from '../DateTimePicker/utils'
import { DatePicker } from '../DatePicker'
import { TimePicker } from '../TimePicker'

import * as S from './styles'

// Set default date in a const to avoid memory leak
const DEFAULT_DATE = new Date()

export const DateTimePicker = forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ children, dataTestId, onChange, size = 'lg', value = DEFAULT_DATE }, ref) => {
    const [date, setDate] = useState(value)

    const handleChange = newDate => {
      setDate(newDate)
      onChange && onChange(new Date(newDate))
    }

    const formatDate = date => getDate(date, 15)

    // format date at component mount
    useEffect(() => {
      onChange && handleChange(formatDate(value))
      //eslint-disable-next-line
    }, [])

    // Ensure values are controlled by parent
    useEffect(() => {
      const formattedDate = formatDate(value)
      if (value - formattedDate !== 0 && onChange) {
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
              inputRef: i < 1 && ref,
              value: date
            })
          )}
        {!children && (
          <>
            <DatePicker inputRef={ref} onChange={handleChange} size={size} value={value} />
            <TimePicker onChange={handleChange} size={size} value={value} />
          </>
        )}
      </S.DateTimePicker>
    )
  }
)

DateTimePicker.displayName = 'DateTimePicker'

DateTimePicker.propTypes = {
  children: node,
  onChange: func,
  size: SIZES_TYPE,
  value: oneOfType([number, object, string]).isRequired
}
