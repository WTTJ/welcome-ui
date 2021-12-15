import React, { Children, cloneElement, forwardRef, useEffect, useState } from 'react'
import { DatePicker, DatePickerProps } from '@welcome-ui/date-picker'
import { TimePicker, TimePickerProps } from '@welcome-ui/time-picker'
import { DEFAULT_DATE, getDate } from '@welcome-ui/date-time-picker-common'
import { WuiTestProps } from '@welcome-ui/system'

import * as S from './styles'

export type DateTimePickerProps = WuiTestProps &
  Pick<DatePickerProps, 'disabled' | 'locale' | 'onChange' | 'size' | 'value'> &
  Pick<TimePickerProps, 'disabled' | 'locale' | 'onChange' | 'size' | 'value'>

export const DateTimePicker = forwardRef<HTMLInputElement, DateTimePickerProps>(
  (
    { children, dataTestId, disabled, locale, onChange, size = 'lg', value = DEFAULT_DATE },
    ref
  ) => {
    const formatDate: (date: DateTimePickerProps['value']) => ReturnType<typeof getDate> = date =>
      getDate(date, 15)

    const [date, setDate] = useState(formatDate(value))

    const handleChange: DateTimePickerProps['onChange'] = newDate => {
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
      if (new Date(value)?.getTime() - formattedDate?.getTime() !== 0 && onChange) {
        handleChange(formattedDate)
      }
      setDate(formattedDate)
      //eslint-disable-next-line
    }, [value])

    return (
      <S.DateTimePicker data-testid={dataTestId}>
        {children &&
          Children.map(children, (child: React.ReactElement, i) =>
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
              locale={locale}
              onChange={handleChange}
              ref={ref}
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
