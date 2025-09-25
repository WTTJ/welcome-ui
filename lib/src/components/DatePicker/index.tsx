import type { EventHandler } from 'react'
import React, { useEffect, useRef, useState } from 'react'
import { forwardRef } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import '@/components/DateTimePickerCommon/date-picker.scss'
import { CustomHeader } from '@/components/DateTimePickerCommon/CustomHeader'
import { CustomPopper } from '@/components/DateTimePickerCommon/CustomPopper'
import type { CustomHeaderProps } from '@/components/DateTimePickerCommon/types'
import { DEFAULT_DATE, getDate } from '@/components/DateTimePickerCommon/utils'
import { InputText } from '@/components/InputText'

import type { DatePickerProps } from './types'

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      autoFocus,
      dataTestId,
      dateFormat = 'dd/MM/yyyy',
      disabled,
      endYear = DEFAULT_DATE.getFullYear(),
      icon,
      iconPlacement = 'left',
      locale,
      onChange,
      placeholder,
      popperProps,
      preventVirtualKeyboard = false,
      showMonthYearPicker,
      size = 'md',
      startYear = 1900,
      transparent,
      useWeekdaysShort = true,
      value = DEFAULT_DATE,
      ...rest
    },
    ref
  ) => {
    const timeIntervals = rest?.timeIntervals
    const formatDate = (date: Date | number | string) => getDate(date, timeIntervals)

    const [date, setDate] = useState(formatDate(value))
    const inputRef = useRef<HTMLInputElement>()

    // format date at component mount
    useEffect(() => {
      onChange?.(formatDate(value))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Ensure values are controlled by parent
    useEffect(() => {
      const formattedDate = formatDate(value)
      const valueToParse = typeof value === 'object' ? value?.toISOString() : value
      if (new Date(Date.parse(valueToParse))?.getTime() - formattedDate?.getTime() !== 0) {
        onChange?.(formattedDate)
      }
      setDate(formattedDate)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (['Enter', 'Escape'].includes(e.key)) {
        inputRef.current?.blur()
      }
    }

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
      // @ts-ignore
      <ReactDatePicker
        autoComplete="off"
        calendarClassName="date-picker-popper"
        customInput={
          <InputText
            autoFocus={autoFocus}
            className="date-picker"
            data-testid={dataTestId}
            icon={icon}
            iconPlacement={iconPlacement}
            inputMode={preventVirtualKeyboard ? 'none' : 'text'}
            isClearable
            onReset={handleReset}
            placeholder={placeholder}
            ref={ref}
            size={size}
            transparent={transparent}
          />
        }
        dateFormat={dateFormat}
        disabled={disabled}
        locale={locale}
        maxDate={rest?.maxDate}
        minDate={rest?.minDate}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        popperContainer={CustomPopper}
        popperProps={popperProps}
        renderCustomHeader={(props: CustomHeaderProps) => (
          <CustomHeader
            endYear={endYear}
            isMonthYearPicker={showMonthYearPicker}
            locale={locale}
            startYear={startYear}
            {...props}
          />
        )}
        selected={date}
        selectsMultiple={undefined}
        selectsRange={undefined}
        showMonthYearPicker={showMonthYearPicker}
        useWeekdaysShort={useWeekdaysShort}
        {...rest}
      />
    )
  }
)
