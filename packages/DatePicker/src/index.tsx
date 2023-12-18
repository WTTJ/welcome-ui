import React, { useEffect, useRef, useState } from 'react'
import {
  CustomHeader,
  CustomHeaderOptions,
  CustomHeaderProps,
  CustomInput,
  CustomInputOptions,
  CustomPopper,
  DEFAULT_DATE,
  Focused,
  getDate,
  StyledDatePicker,
} from '@welcome-ui/date-time-picker-common'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { ReactDatePickerProps } from 'react-datepicker'

export interface DatePickerOptions {
  onChange?: (date?: Date) => void
  onBlur?: CustomInputOptions['handleBlur']
  onFocus?: CustomInputOptions['handleFocus']
  useWeekdaysShort?: boolean
  placeholder?: ReactDatePickerProps['placeholderText']
  preventVirtualKeyboard?: boolean
  value: string | Date
  transparent?: boolean
}

export type DatePickerProps = CreateWuiProps<
  typeof StyledDatePicker,
  Omit<ReactDatePickerProps, keyof DatePickerOptions | 'locale'> &
    Partial<Pick<CustomHeaderOptions, 'endYear' | 'startYear'>> &
    Pick<CustomHeaderOptions, 'locale'> &
    Omit<CustomInputOptions, 'handleBlur' | 'handleFocus' | 'onReset' | 'focused' | 'value'> &
    DatePickerOptions
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
      showMonthYearPicker,
      locale,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      preventVirtualKeyboard = false,
      popperProps,
      size = 'md',
      startYear = 1900,
      useWeekdaysShort = true,
      value = DEFAULT_DATE,
      transparent,
      ...rest
    },
    ref
  ) => {
    const timeIntervals = rest?.timeIntervals
    const formatDate = (date: string | number | Date) => getDate(date, timeIntervals)

    const placeholderText = placeholder || rest.placeholderText

    const [focused, setFocused] = useState<Focused>((autoFocus && 'date') || null)
    const [date, setDate] = useState(formatDate(value))
    const inputRef = useRef<HTMLInputElement>()

    // format date at component mount
    useEffect(() => {
      onChange && onChange(formatDate(value))
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
      onFocus && onFocus(e)
    }

    const handleBlur: CustomInputOptions['handleBlur'] = e => {
      setFocused(null)
      onBlur && onBlur(e)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (['Escape', 'Enter'].includes(e.key)) {
        blur()
      }
    }

    const handleReset: CustomInputOptions['onReset'] = e => {
      e.preventDefault()
      blur()
      setDate(null)
      onChange && onChange(null)
    }

    const handleChange = (newDate: Date) => {
      if (!newDate) return
      const date = formatDate(newDate)

      newDate.setHours(date.getHours(), date.getMinutes())
      setDate(newDate)
      onChange && onChange(new Date(newDate))
    }

    return (
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
