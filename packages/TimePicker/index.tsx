import React, { useEffect, useState } from 'react'
import {
  CustomInput,
  CustomInputProps,
  CustomPopper,
  DEFAULT_DATE,
  Focused,
  getDate,
  StyledTimePicker,
} from '@welcome-ui/date-time-picker-common'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { ReactDatePickerProps } from 'react-datepicker'

export interface TimePickerOptions {
  onChange?: (date?: Date) => void
  placeholder: ReactDatePickerProps['placeholderText']
}

export type TimePickerProps = CreateWuiProps<
  typeof StyledTimePicker,
  Omit<ReactDatePickerProps, 'onChange'> & CustomInputProps & TimePickerOptions
>

export const TimePicker = forwardRef<'input', TimePickerProps>(
  (
    {
      autoFocus,
      dataTestId,
      dateFormat = 'HH:mm',
      disabled,
      value = DEFAULT_DATE,
      onBlur,
      onChange,
      onFocus,
      size = 'lg',
      icon,
      iconPlacement = 'left',
      inputRef,
      placeholder,
      popperProps,
      timeIntervals = 15,
      ...rest
    },
    ref
  ) => {
    const formatDate: (date: string | number | Date) => Date = date => getDate(date, timeIntervals)
    const placeholderText = placeholder || rest.placeholderText

    const [focused, setFocused] = useState<Focused>((autoFocus && 'time') || null)
    const [date, setDate] = useState(formatDate(value))

    // format date at component mount
    useEffect(() => {
      onChange && onChange(formatDate(value))
      //eslint-disable-next-line
    }, [])

    // Ensure values are controlled by parent
    useEffect(() => {
      const formattedDate = formatDate(value)
      if (new Date(value)?.getTime() - formattedDate?.getTime() !== 0 && onChange) {
        onChange(formattedDate)
      }
      setDate(formattedDate)
      //eslint-disable-next-line
    }, [value])

    const handleFocus: CustomInputProps['handleFocus'] = e => {
      setFocused('time')
      onFocus && onFocus(e)
    }

    const handleBlur: CustomInputProps['handleBlur'] = e => {
      setFocused(null)
      onBlur && onBlur(e)
    }

    const handleReset: CustomInputProps['onReset'] = e => {
      e.preventDefault()
      setDate(null)
      onChange && onChange()
    }

    const handleChange: TimePickerOptions['onChange'] = newDate => {
      if (!newDate) return
      const date = formatDate(newDate)

      newDate.setFullYear(date.getFullYear(), date.getMonth(), date.getDate())
      setDate(newDate)
      onChange && onChange(new Date(newDate))
    }

    return (
      <StyledTimePicker
        calendarClassName="time-picker-popper"
        customInput={
          <CustomInput
            className="time-picker"
            data-testid={dataTestId}
            focused={focused}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            icon={icon}
            iconPlacement={iconPlacement}
            inputRef={inputRef || ref}
            onReset={handleReset}
            size={size}
          />
        }
        dateFormat={dateFormat}
        disabled={disabled}
        onChange={handleChange}
        placeholderText={placeholderText}
        popperContainer={CustomPopper}
        popperProps={popperProps}
        selected={date}
        showTimeSelect
        showTimeSelectOnly
        size={size}
        timeIntervals={timeIntervals}
        {...rest}
        isClearable={false}
      />
    )
  }
)

TimePicker.displayName = 'TimePicker'
