import { DatePicker, Stack } from 'welcome-ui'
import * as React from 'react'
import { WttjIcon } from '@welcome-ui/icons'

const Example = () => {
  return (
    <Stack spacing="xl">
      <DatePicker name="welcome" size="xs" value={new Date()} />
      <DatePicker name="welcome" size="sm" value={new Date()} />
      <DatePicker name="welcome" value={new Date()} />
      <DatePicker name="welcome" size="lg" value={new Date()} />
      Example with icon
      <DatePicker icon={<WttjIcon />} name="welcome" size="xs" value={new Date()} />
      <DatePicker icon={<WttjIcon />} name="welcome" size="sm" value={new Date()} />
      <DatePicker icon={<WttjIcon />} name="welcome" value={new Date()} />
      <DatePicker icon={<WttjIcon />} name="welcome" size="lg" value={new Date()} />
    </Stack>
  )
}

export default Example
