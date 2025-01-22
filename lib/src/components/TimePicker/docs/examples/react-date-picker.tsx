import * as React from 'react'
import { TimePicker } from '@welcome-ui/time-picker'

const Example = () => {
  return (
    <TimePicker name="welcome" popperProps={{ zIndex: 50 }} timeIntervals={30} value={new Date()} />
  )
}

export default Example
