import type { ComponentProps } from 'react'
import type { DatePickerProps as ReactDatePickerProps } from 'react-datepicker'

import type { InputTextOptions } from '@/components/InputText/types'

import type { CustomHeaderProps } from '../DateTimePickerCommon/types'

export interface TimePickerOptions {
  dataTestId?: string
  onChange?: (date?: Date) => void
  placeholder?: string
  value?: Date | string
}

export type TimePickerProps = ComponentProps<'div'> &
  Omit<ReactDatePickerProps, keyof TimePickerOptions> &
  Partial<Pick<CustomHeaderProps, 'endYear' | 'startYear'>> &
  Pick<CustomHeaderProps, 'locale'> &
  Pick<InputTextOptions, 'icon' | 'iconPlacement' | 'size' | 'transparent'> &
  TimePickerOptions
