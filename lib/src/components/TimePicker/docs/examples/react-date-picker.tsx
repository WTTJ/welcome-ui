import { TimePicker } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <TimePicker name="welcome" popperProps={{ zIndex: 50 }} timeIntervals={30} value={new Date()} />
  )
}

export default Example
