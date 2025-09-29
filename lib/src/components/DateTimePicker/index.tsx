import React, { Children, cloneElement, forwardRef, useEffect, useRef, useState } from 'react'

import styles from '@/components/DateTimePickerCommon/date-time-picker.module.scss'
import { DEFAULT_DATE, getDate } from '@/components/DateTimePickerCommon/utils'
import { classNames } from '@/utils'

import type { DateTimePickerProps } from './types'

const cx = classNames(styles)

export const DateTimePicker = forwardRef<HTMLInputElement, DateTimePickerProps>(
  (
    {
      children,
      disabled,
      locale,
      onChange,
      size = 'md',
      transparent,
      value = DEFAULT_DATE,
      ...rest
    },
    ref
  ) => {
    const timeIntervals = rest?.timeIntervals
    const formatDate = (date: Date | number | string) => getDate(date, timeIntervals)

    const [date, setDate] = useState(formatDate(value))
    const localRef = useRef<HTMLInputElement>()
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || localRef

    const handleChange = (newDate: Date | Date[] | null) => {
      if (!newDate) {
        setDate(null)
        onChange?.(null)
        return
      }

      // Handle array of dates (range or multi-select)
      const selectedDate = Array.isArray(newDate) ? newDate[0] : newDate
      if (!selectedDate) {
        setDate(null)
        onChange?.(null)
        return
      }

      const formattedDate = formatDate(selectedDate)
      selectedDate.setHours(formattedDate.getHours(), formattedDate.getMinutes())
      setDate(selectedDate)
      onChange?.(new Date(selectedDate))
    }

    // format date at component mount
    useEffect(() => {
      handleChange(formatDate(value))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Ensure values are controlled by parent
    useEffect(() => {
      const formattedDate = formatDate(value)
      if (new Date(value)?.getTime() - formattedDate?.getTime() !== 0) {
        handleChange(formattedDate)
      }

      setDate(formattedDate)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
      <div className={cx('date-time-picker')}>
        {Children.map(children, (child: React.ReactElement, i) => {
          const isDatePicker = i === 0

          return cloneElement(child, {
            disabled,
            inputRef: isDatePicker ? inputRef : null, // give ref only to the DatePicker
            key: i,
            locale,
            onChange: handleChange,
            size,
            timeIntervals,
            transparent,
            value: date,
          })
        })}
      </div>
    )
  }
)
