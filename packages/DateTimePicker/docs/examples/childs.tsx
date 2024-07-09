import * as React from 'react'
import { DateTimePicker } from '@welcome-ui/date-time-picker'
import { DatePicker } from '@welcome-ui/date-picker'
import { TimePicker } from '@welcome-ui/time-picker'
import { WttjIcon } from '@welcome-ui/icons'

const Example = () => {
  return (
    <DateTimePicker name="welcome" value={new Date()}>
      <DatePicker icon={<WttjIcon />} iconPlacement="right" value={new Date()} />
      <TimePicker value={new Date()} />
    </DateTimePicker>
  )
}

export default Example
