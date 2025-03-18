import React, { Children, cloneElement, useEffect, useState } from 'react'

import * as S from './styles'

import { DatePicker, DatePickerProps } from '@/DatePicker'
import { TimePicker, TimePickerProps } from '@/TimePicker'
import { DEFAULT_DATE, getDate } from '@/DateTimePickerCommon'
import { CreateWuiProps, forwardRef } from '@/System'

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

    const [date, setDate] = useState<Date | null>(formatDate(value))

    const handleChange: DateTimePickerProps['onChange'] = newDate => {
      setDate(newDate || null)
      onChange?.(newDate && new Date(newDate))
    }

    // format date at component mount
    useEffect(() => {
      if (onChange) handleChange(formatDate(value))
    }, [])

    // Ensure values are controlled by parent
    useEffect(() => {
      const formattedDate = formatDate(value)
      if (new Date(value)?.getTime() - formattedDate?.getTime() !== 0 && onChange) {
        handleChange(formattedDate)
      }
      setDate(formattedDate)
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
