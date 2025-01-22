import * as React from 'react'
import { Label } from 'welcome-ui/Label'
import { Stack } from 'welcome-ui/Stack'

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
