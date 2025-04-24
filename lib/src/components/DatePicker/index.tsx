import React, { useEffect, useRef, useState } from 'react'
import type { ReactDatePickerProps } from 'react-datepicker'

import type { CustomHeaderProps, CustomInputOptions, Focused } from '@/DateTimePickerCommon'
import {
  CustomHeader,
  CustomInput,
  CustomPopper,
  DEFAULT_DATE,
  getDate,
  StyledDatePicker,
} from '@/DateTimePickerCommon'
import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

export interface DatePickerOptions {
  onBlur?: CustomInputOptions['handleBlur']
  onChange?: (date?: Date) => void
  onFocus?: CustomInputOptions['handleFocus']
  placeholder?: ReactDatePickerProps['placeholderText']
  preventVirtualKeyboard?: boolean
  transparent?: boolean
  useWeekdaysShort?: boolean
  value: Date | string
}

export type DatePickerProps = CreateWuiProps<
  typeof StyledDatePicker,
  DatePickerOptions &
    Omit<CustomInputOptions, 'focused' | 'handleBlur' | 'handleFocus' | 'onReset' | 'value'> &
    Omit<ReactDatePickerProps, 'locale' | keyof DatePickerOptions> &
    Partial<Pick<CustomHeaderProps, 'endYear' | 'startYear'>> &
    Pick<CustomHeaderProps, 'locale'>
>

export const DatePicker = forwardRef<'input', DatePickerProps>(
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
      onBlur,
      onChange,
      onFocus,
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

    const placeholderText = placeholder || rest.placeholderText

    const [focused, setFocused] = useState<Focused>((autoFocus && 'date') || null)
    const [date, setDate] = useState(formatDate(value))
    const inputRef = useRef<HTMLInputElement>()

    // format date at component mount
    useEffect(() => {
      if (onChange) {
        onChange(formatDate(value))
      }
      //eslint-disable-next-line
    }, [])

    // Ensure values are controlled by parent
    useEffect(() => {
      const formattedDate = formatDate(value)
      const valueToParse = typeof value === 'object' ? value?.toISOString() : value
      if (
        new Date(Date.parse(valueToParse))?.getTime() - formattedDate?.getTime() !== 0 &&
        onChange
      ) {
        onChange(formattedDate)
      }
      setDate(formattedDate)
      //eslint-disable-next-line
    }, [value])

    const blur = () => inputRef.current?.blur()

    const handleFocus: CustomInputOptions['handleFocus'] = e => {
      setFocused('date')

      if (onFocus) {
        onFocus(e)
      }
    }

    const handleBlur: CustomInputOptions['handleBlur'] = e => {
      setFocused(null)

      if (onBlur) {
        onBlur(e)
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (['Enter', 'Escape'].includes(e.key)) {
        blur()
      }
    }

    const handleReset: CustomInputOptions['onReset'] = e => {
      e.preventDefault()
      blur()
      setDate(null)

      if (onChange) {
        onChange(null)
      }
    }

    const handleChange = (newDate: Date) => {
      if (!newDate) return
      const date = formatDate(newDate)

      newDate.setHours(date.getHours(), date.getMinutes())
      setDate(newDate)

      if (onChange) {
        onChange(new Date(newDate))
      }
    }

    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <StyledDatePicker
        autoComplete="off"
        calendarClassName="date-picker-popper"
        customInput={
          <CustomInput
            className="date-picker"
            data-testid={dataTestId}
            focused={focused}
            handleBlur={e => handleBlur(e)}
            handleFocus={e => handleFocus(e)}
            icon={icon}
            iconPlacement={iconPlacement}
            inputMode={preventVirtualKeyboard ? 'none' : 'text'}
            onReset={handleReset}
            ref={instance => {
              // for internal use only
              inputRef.current = instance
              // for external use
              if (typeof ref === 'function') {
                ref(instance)
              } else {
                ref.current = instance
              }
            }}
            size={size}
          />
        }
        dateFormat={dateFormat}
        disabled={disabled}
        iconPlacement={!!icon && iconPlacement}
        locale={locale}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholderText={placeholderText}
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
        showMonthYearPicker={showMonthYearPicker}
        size={size}
        transparent={transparent}
        useWeekdaysShort={useWeekdaysShort}
        {...rest}
      />
    )
  }
)

DatePicker.displayName = 'DatePicker'
