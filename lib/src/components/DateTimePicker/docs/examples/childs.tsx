import * as React from 'react'

import { DatePicker } from '@/DatePicker'
import { DateTimePicker } from '@/DateTimePicker'
import { WttjIcon } from '@/Icons'
import { TimePicker } from '@/TimePicker'

const Example = () => {
  return (
    <DateTimePicker name="welcome" value={new Date()}>
      <DatePicker icon={<WttjIcon />} iconPlacement="right" value={new Date()} />
      <TimePicker value={new Date()} />
    </DateTimePicker>
  )
}

export default Example
