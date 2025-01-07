import { DateTimePicker, Stack } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <Stack>
      <DateTimePicker name="welcome" size="xs" value={new Date()} />
      <DateTimePicker name="welcome" size="sm" value={new Date()} />
      <DateTimePicker name="welcome" value={new Date()} />
      <DateTimePicker name="welcome" size="lg" value={new Date()} />
    </Stack>
  )
}

export default Example
