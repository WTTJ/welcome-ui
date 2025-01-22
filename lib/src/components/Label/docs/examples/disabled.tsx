import * as React from 'react'
import { Label } from 'welcome-ui/Label'
import { Stack } from 'welcome-ui/Stack'

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
