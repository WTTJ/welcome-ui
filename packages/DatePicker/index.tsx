import React, { useEffect, useState } from 'react'
import {
  CustomHeader,
  CustomHeaderProps,
  CustomInput,
  CustomInputProps,
  CustomPopper,
  DEFAULT_DATE,
  Focused,
  getDate,
  StyledDatePicker,
} from '@welcome-ui/date-time-picker-common'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

export interface DatePickerOptions {
  onChange?: (date?: Date) => void
}

export type DatePickerProps = CreateWuiProps<
  typeof StyledDatePicker,
  CustomHeaderProps & CustomInputProps & DatePickerOptions
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
      inputRef,
      locale,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      popperProps,
      size = 'lg',
      startYear = 1900,
      useWeekdaysShort = true,
      value = DEFAULT_DATE,
      ...rest
    },
    ref
  ) => {
    const formatDate = (date: string | number | Date) => getDate(date, 15)
    const placeholderText = placeholder || rest.placeholderText

    const [focused, setFocused] = useState<Focused>((autoFocus && 'date') || null)
    const [date, setDate] = useState(formatDate(value))
    const inputReference = inputRef || ref

    // format date at component mount
    useEffect(() => {
      onChange && onChange(formatDate(value))
      //eslint-disable-next-line
    }, [])

    // Ensure values are controlled by parent
    useEffect(() => {
      const formattedDate = formatDate(value)
      const valueToParse = typeof value === 'object' ? value?.toISOString() : value
      if (new Date(Date.parse(valueToParse)) - formattedDate !== 0 && onChange) {
        onChange(formattedDate)
      }
      setDate(formattedDate)
      //eslint-disable-next-line
    }, [value])

    const blur = () => inputReference?.current.blur()

    const handleFocus = (e: CustomInputProps['handleFocus']) => {
      setFocused('date')
      onFocus && onFocus(e)
    }

    const handleBlur = (e: CustomInputProps['handleBlur']) => {
      setFocused(null)
      onBlur && onBlur(e)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (['Escape', 'Enter'].includes(e.key)) {
        blur()
      }
    }

    const handleReset = (e: CustomInputProps['onReset']) => {
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
            handleBlur={e => handleBlur('date', e)}
            handleFocus={e => handleFocus('date', e)}
            icon={icon}
            iconPlacement={iconPlacement}
            inputRef={inputReference}
            onReset={handleReset}
            size={size}
          />
        }
        dateFormat={dateFormat}
        disabled={disabled}
        locale={locale}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholderText={placeholderText}
        popperContainer={CustomPopper}
        popperProps={popperProps}
        renderCustomHeader={(props: CustomHeaderProps) => (
          <CustomHeader endYear={endYear} locale={locale} startYear={startYear} {...props} />
        )}
        selected={date}
        size={size}
        useWeekdaysShort={useWeekdaysShort}
        {...rest}
        isClearable={false}
      />
    )
  }
)

DatePicker.displayName = 'DatePicker'
