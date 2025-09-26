import type { ComponentProps } from 'react'
import type { DatePickerProps as ReactDatePickerProps } from 'react-datepicker'

import type { CustomHeaderProps } from '@/components/DateTimePickerCommon/types'
import type { InputTextOptions } from '@/components/InputText/types'

export type DateTimePickerProps = ComponentProps<'div'> &
  DateTimePickerOptions &
  Omit<ReactDatePickerProps, 'locale' | keyof DateTimePickerOptions> &
  Pick<CustomHeaderProps, 'locale'> &
  Pick<InputTextOptions, 'size' | 'transparent'>

interface DateTimePickerOptions {
  dataTestId?: string
  onChange?: (date?: Date) => void
  value?: Date | string
}
