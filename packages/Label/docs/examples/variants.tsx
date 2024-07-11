import * as React from 'react'
import { Label } from '@welcome-ui/label'
import { Stack } from '@welcome-ui/stack'

const Example = () => {
  return (
    <Stack spacing="xl">
      <Label variant="warning">Warning variant</Label>
      <Label variant="error">Error variant</Label>
      <Label variant="info">Info variant</Label>
      <Label variant="success">Success variant</Label>
    </Stack>
  )
}

export default Example
