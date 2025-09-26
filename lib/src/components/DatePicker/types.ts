import type { ComponentProps } from 'react'
import type { DatePickerProps as ReactDatePickerProps } from 'react-datepicker'

import type { InputTextOptions } from '@/components/InputText/types'

import type { CustomHeaderProps } from '../DateTimePickerCommon/types'

export interface DatePickerOptions {
  dataTestId?: string
  onChange?: (date?: Date) => void
  placeholder?: string
  preventVirtualKeyboard?: boolean
  useWeekdaysShort?: boolean
  value?: Date | string
}

export type DatePickerProps = ComponentProps<'div'> &
  DatePickerOptions &
  Omit<ReactDatePickerProps, 'locale' | keyof DatePickerOptions> &
  Partial<Pick<CustomHeaderProps, 'endYear' | 'startYear'>> &
  Pick<CustomHeaderProps, 'locale'> &
  Pick<InputTextOptions, 'icon' | 'iconPlacement' | 'size' | 'transparent'>
