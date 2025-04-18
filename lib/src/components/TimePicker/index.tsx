import { useEffect, useState } from 'react'
import type { ReactDatePickerProps } from 'react-datepicker'

import type { CustomInputOptions, Focused } from '@/DateTimePickerCommon'
import {
  CustomInput,
  CustomPopper,
  DEFAULT_DATE,
  getDate,
  StyledTimePicker,
} from '@/DateTimePickerCommon'
import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import * as S from './styles'

export interface TimePickerOptions {
  onBlur?: CustomInputOptions['handleBlur']
  onChange?: (date?: Date) => void
  onFocus?: CustomInputOptions['handleFocus']
  placeholder?: ReactDatePickerProps['placeholderText']
  transparent?: boolean
  value: Date | string
}

export type TimePickerProps = CreateWuiProps<
  typeof StyledTimePicker,
  Omit<ReactDatePickerProps, keyof TimePickerOptions> &
    Pick<CustomInputOptions, 'icon' | 'iconPlacement' | 'size'> &
    TimePickerOptions
>

export const TimePicker = forwardRef<'input', TimePickerProps>(
  (
    {
      autoFocus,
      dataTestId,
      dateFormat = 'HH:mm',
      disabled,
      icon,
      iconPlacement = 'left',
      onBlur,
      onChange,
      onFocus,
      placeholder,
      popperProps,
      size = 'md',
      timeIntervals = 15,
      transparent,
      value = DEFAULT_DATE,
      ...rest
    },
    ref
  ) => {
    const formatDate: (date: Date | number | string) => Date = date => getDate(date, timeIntervals)
    const placeholderText = placeholder || rest.placeholderText

    const [focused, setFocused] = useState<Focused>((autoFocus && 'time') || null)
    const [date, setDate] = useState<Date | null>(formatDate(value))

    // format date at component mount
    useEffect(() => {
      onChange?.(formatDate(value))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Ensure values are controlled by parent
    useEffect(() => {
      const formattedDate = formatDate(value)
      if (new Date(value)?.getTime() - formattedDate?.getTime() !== 0 && onChange) {
        onChange(formattedDate)
      }
      setDate(formattedDate)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    const handleFocus: CustomInputOptions['handleFocus'] = e => {
      setFocused('time')
      onFocus?.(e)
    }

    const handleBlur: CustomInputOptions['handleBlur'] = e => {
      setFocused(null)
      onBlur?.(e)
    }

    const handleReset: CustomInputOptions['onReset'] = e => {
      e.preventDefault()
      setDate(null)
      onChange?.()
    }

    const handleChange: TimePickerOptions['onChange'] = newDate => {
      if (!newDate) return
      const date = formatDate(newDate)

      newDate.setFullYear(date.getFullYear(), date.getMonth(), date.getDate())
      setDate(newDate)
      onChange?.(new Date(newDate))
    }

    return (
      <S.Wrapper>
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
      </S.Wrapper>
    )
  }
)

TimePicker.displayName = 'TimePicker'
