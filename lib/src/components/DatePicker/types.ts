import type { DatePickerProps as ReactDatePickerProps } from 'react-datepicker'

import type {
  CustomHeaderProps,
  CustomInputOptions,
  StyledDatePicker,
} from '@/components/DateTimePickerCommon/types'
import type { MergeProps } from '@/utils'

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

export type DatePickerProps = MergeProps<
  typeof StyledDatePicker,
  DatePickerOptions &
    Omit<CustomInputOptions, 'focused' | 'handleBlur' | 'handleFocus' | 'onReset' | 'value'> &
    Omit<ReactDatePickerProps, 'locale' | keyof DatePickerOptions> &
    Partial<Pick<CustomHeaderProps, 'endYear' | 'startYear'>> &
    Pick<CustomHeaderProps, 'locale'>
>
