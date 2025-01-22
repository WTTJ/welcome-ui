import * as React from 'react'
import { DateTimePicker } from 'welcome-ui/DateTimePicker'
import { DatePicker } from 'welcome-ui/DatePicker'
import { TimePicker } from 'welcome-ui/TimePicker'
import { WttjIcon } from 'welcome-ui/Icons'

const Example = () => {
  return (
    <DateTimePicker name="welcome" value={new Date()}>
      <DatePicker icon={<WttjIcon />} iconPlacement="right" value={new Date()} />
      <TimePicker value={new Date()} />
    </DateTimePicker>
  )
}

export default Example
