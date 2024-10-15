import React, { Children, cloneElement, useEffect, useState } from 'react'
import { DatePicker, DatePickerProps } from '@welcome-ui/date-picker'
import { TimePicker, TimePickerProps } from '@welcome-ui/time-picker'
import { DEFAULT_DATE, getDate } from '@welcome-ui/date-time-picker-common'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type DateTimePickerProps = CreateWuiProps<
  'input',
  Pick<DatePickerProps, 'disabled' | 'locale' | 'onChange' | 'size' | 'value' | 'transparent'> &
    Pick<TimePickerProps, 'disabled' | 'locale' | 'onChange' | 'size' | 'value' | 'transparent'>
>

export const DateTimePicker = forwardRef<'input', DateTimePickerProps>(
  (
    {
      children,
      dataTestId,
      disabled,
      locale,
      onChange,
      size = 'md',
      transparent,
      value = DEFAULT_DATE,
    },
    ref
  ) => {
    const TimePickerNode =
      Children.count(children) > 1 &&
      Children.toArray(children).find(
        (child: JSX.Element): boolean => child.type.displayName === 'TimePicker'
      )
    const timeIntervals = React.isValidElement(TimePickerNode)
      ? TimePickerNode.props.timeIntervals
      : undefined

    const formatDate: (date: DateTimePickerProps['value']) => ReturnType<typeof getDate> = date =>
      getDate(date, timeIntervals)

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
              // eslint-disable-next-line react/no-array-index-key
              key: i,
              onChange: handleChange,
              // give ref only to the first child
              inputRef: i < 1 ? ref : null,
              locale: locale,
              timeIntervals,
              value: date,
              transparent,
            })
          )}
        {!children && (
          <>
            <DatePicker
              dataTestId={`${dataTestId}-datePicker`}
              disabled={disabled}
              locale={locale}
              onChange={handleChange}
              ref={ref}
              size={size}
              transparent={transparent}
              value={value}
            />
            <TimePicker
              dataTestId={`${dataTestId}-timePicker`}
              disabled={disabled}
              locale={locale}
              onChange={handleChange}
              size={size}
              transparent={transparent}
              value={value}
            />
          </>
        )}
      </S.DateTimePicker>
    )
  }
)

DateTimePicker.displayName = 'DateTimePicker'
