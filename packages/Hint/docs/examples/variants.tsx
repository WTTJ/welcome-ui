import * as React from 'react'
import { Hint } from '@welcome-ui/hint'
import { Stack } from '@welcome-ui/stack'

const Example = () => {
  return (
    <Stack gap="xl">
      <Hint>default</Hint>
      <Hint variant="warning">warning</Hint>
      <Hint variant="error">error</Hint>
      <Hint variant="info">info</Hint>
      <Hint variant="success">success</Hint>
    </Stack>
  )
}

export default Example
