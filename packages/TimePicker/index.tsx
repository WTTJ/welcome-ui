import React, { useEffect, useState } from 'react'
import {
  CustomInput,
  CustomInputOptions,
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
  onBlur?: CustomInputOptions['handleBlur']
  onFocus?: CustomInputOptions['handleFocus']
  placeholder?: ReactDatePickerProps['placeholderText']
  value: string | Date
  transparent?: boolean
}

export type TimePickerProps = CreateWuiProps<
  typeof StyledTimePicker,
  Omit<ReactDatePickerProps, keyof TimePickerOptions> &
    Pick<CustomInputOptions, 'size' | 'icon' | 'iconPlacement'> &
    TimePickerOptions
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
      size = 'md',
      icon,
      iconPlacement = 'left',
      placeholder,
      popperProps,
      timeIntervals = 15,
      transparent,
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

    const handleFocus: CustomInputOptions['handleFocus'] = e => {
      setFocused('time')
      onFocus && onFocus(e)
    }

    const handleBlur: CustomInputOptions['handleBlur'] = e => {
      setFocused(null)
      onBlur && onBlur(e)
    }

    const handleReset: CustomInputOptions['onReset'] = e => {
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
            onReset={handleReset}
            ref={ref}
            size={size}
          />
        }
        dateFormat={dateFormat}
        disabled={disabled}
        iconPlacement={!!icon && iconPlacement}
        onChange={handleChange}
        placeholderText={placeholderText}
        popperContainer={CustomPopper}
        popperProps={popperProps}
        selected={date}
        showTimeSelect
        showTimeSelectOnly
        size={size}
        timeIntervals={timeIntervals}
        transparent={transparent}
        {...rest}
        isClearable={false}
      />
    )
  }
)

TimePicker.displayName = 'TimePicker'
