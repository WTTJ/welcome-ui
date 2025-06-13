import React, { Children, cloneElement, useEffect, useMemo, useState } from 'react'

import type { DatePickerProps } from '@/DatePicker'
import { DatePicker } from '@/DatePicker'
import { DEFAULT_DATE, getDate } from '@/DateTimePickerCommon'
import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'
import type { TimePickerProps } from '@/TimePicker'
import { TimePicker } from '@/TimePicker'

import * as S from './styles'
import { getLocale, type LocalesKey } from './utils'

export type DateTimePickerProps = CreateWuiProps<
  'input',
  Pick<DatePickerProps, 'onChange' | 'size' | 'transparent' | 'value'> &
    Pick<TimePickerProps, 'onChange' | 'size' | 'transparent' | 'value'> & {
      locale?: LocalesKey
    }
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

    const localeObject = useMemo(() => getLocale(locale), [locale])

    return (
      <S.DateTimePicker data-testid={dataTestId}>
        {children
          ? Children.map(children, (child: React.ReactElement, i) =>
              cloneElement(child, {
                // give ref only to the first child
                inputRef: i < 1 ? ref : null,
                key: i,
                locale: locale,
                onChange: handleChange,
                timeIntervals,
                transparent,
                value: date,
              })
            )
          : null}
        {!children && (
          <>
            <DatePicker
              dataTestId={`${dataTestId}-datePicker`}
              disabled={disabled}
              locale={localeObject}
              onChange={handleChange}
              ref={ref}
              size={size}
              transparent={transparent}
              value={value}
            />
            <TimePicker
              dataTestId={`${dataTestId}-timePicker`}
              disabled={disabled}
              locale={localeObject}
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
