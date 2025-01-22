import * as React from 'react'
import { Hint } from 'welcome-ui/Hint'
import { Stack } from 'welcome-ui/Stack'

const Example = () => {
  return (
    <Stack spacing="xl">
      <Hint>default</Hint>
      <Hint variant="warning">warning</Hint>
      <Hint variant="danger">danger</Hint>
      <Hint variant="success">success</Hint>
    </Stack>
  )
}

export default Example
