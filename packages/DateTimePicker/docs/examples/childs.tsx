import * as React from 'react'
import { DateTimePicker } from '@welcome-ui/date-time-picker'
import { DatePicker } from '@welcome-ui/date-picker'
import { TimePicker } from '@welcome-ui/time-picker'
import { WttjIcon } from '@welcome-ui/icons'

const Example = () => {
  return (
    <DateTimePicker
      dateFormat="MMM dd yyyy"
      name="welcome"
      popperProps={{ zIndex: 50 }}
      showMonthDropdown
      showYearDropdown
      value={new Date()}
    >
      <DatePicker icon={<WttjIcon />} iconPlacement="right" />
      <TimePicker />
    </DateTimePicker>
  )
}

export default Example
