import { Label, Stack } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <Stack spacing="xl">
      <Label variant="warning">Warning variant</Label>
      <Label variant="danger">Danger variant</Label>
      <Label variant="success">Success variant</Label>
    </Stack>
  )
}

export default Example
