import { DatePicker, DateTimePicker, TimePicker } from 'welcome-ui'
import * as React from 'react'
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
