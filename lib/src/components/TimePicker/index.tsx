import type { EventHandler } from 'react'
import { forwardRef, useEffect, useRef, useState } from 'react'
import ReactDatePicker from 'react-datepicker'

import '@/components/DateTimePickerCommon/date-time-picker.scss'
import { CustomPopper } from '@/components/DateTimePickerCommon/CustomPopper'
import styles from '@/components/DateTimePickerCommon/date-time-picker.module.scss'
import { DEFAULT_DATE, getDate } from '@/components/DateTimePickerCommon/utils'
import { InputText } from '@/components/InputText'
import { classNames } from '@/utils'

import type { TimePickerProps } from './types'

const cx = classNames(styles)

export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  (
    {
      autoFocus,
      className,
      dateFormat = 'HH:mm',
      disabled,
      icon,
      iconPlacement = 'left',
      onChange,
      placeholder,
      size = 'md',
      timeIntervals = 15,
      transparent,
      value = DEFAULT_DATE,
      ...rest
    },
    ref
  ) => {
    const formatDate: (date: Date | number | string) => Date = date => getDate(date, timeIntervals)

    const [date, setDate] = useState(formatDate(value))
    const localRef = useRef<HTMLInputElement>()
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || localRef

    // format date at component mount
    useEffect(() => {
      onChange?.(formatDate(value))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Ensure values are controlled by parent
    useEffect(() => {
      const formattedDate = formatDate(value)
      if (new Date(value)?.getTime() - formattedDate?.getTime() !== 0) {
        onChange?.(formattedDate)
      }
      setDate(formattedDate)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    const handleReset: EventHandler<React.MouseEvent<HTMLInputElement>> = e => {
      e.preventDefault()
      inputRef.current?.blur()
      setDate(null)
      onChange?.(null)
    }

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

    return (
      // type issue in react-datepicker (https://github.com/Hacker0x01/react-datepicker/issues/5391)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      <ReactDatePicker
        calendarClassName="time-picker-popper"
        customInput={
          <InputText
            autoFocus={autoFocus}
            className={cx('time-picker', className)}
            data-testid={rest['data-testid']}
            disabled={disabled}
            icon={icon}
            iconPlacement={iconPlacement}
            isClearable={false}
            onReset={handleReset}
            ref={ref}
            size={size}
            transparent={transparent}
          />
        }
        dateFormat={dateFormat}
        onChange={handleChange}
        placeholderText={placeholder}
        popperContainer={CustomPopper}
        selected={date}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={timeIntervals}
        {...rest}
      />
    )
  }
)

TimePicker.displayName = 'TimePicker'
