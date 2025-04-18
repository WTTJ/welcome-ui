import React, { Children, cloneElement, useEffect, useState } from 'react'

import type { DatePickerProps } from '@/DatePicker'
import { DatePicker } from '@/DatePicker'
import { DEFAULT_DATE, getDate } from '@/DateTimePickerCommon'
import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'
import type { TimePickerProps } from '@/TimePicker'
import { TimePicker } from '@/TimePicker'

import * as S from './styles'

export type DateTimePickerProps = CreateWuiProps<
  'input',
  Pick<DatePickerProps, 'disabled' | 'locale' | 'onChange' | 'size' | 'transparent' | 'value'> &
    Pick<TimePickerProps, 'disabled' | 'locale' | 'onChange' | 'size' | 'transparent' | 'value'>
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
        child => React.isValidElement(child) && child.type === TimePicker
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Ensure values are controlled by parent
    useEffect(() => {
      const formattedDate = formatDate(value)
      if (new Date(value)?.getTime() - formattedDate?.getTime() !== 0 && onChange) {
        handleChange(formattedDate)
      }
      setDate(formattedDate)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
      <S.DateTimePicker data-testid={dataTestId}>
        {children
          ? Children.map(children, (child, i) => {
              if (React.isValidElement(child)) {
                return cloneElement(child, {
                  // give ref only to the first child
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  inputRef: i < 1 ? ref : null,
                  key: i,
                  locale: locale,
                  onChange: handleChange,
                  timeIntervals,
                  transparent,
                  value: date,
                })
              }
              return child
            })
          : null}
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
