import { Hint, Stack } from 'welcome-ui'
import * as React from 'react'

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
