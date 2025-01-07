import { Label, Stack } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <Stack spacing="xl">
      <Label disabled>Disabled label</Label>
      <Label disabled variant="warning">
        Disabled custom warning label
      </Label>
    </Stack>
  )
}

export default Example
