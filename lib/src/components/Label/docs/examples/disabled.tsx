import * as React from 'react'
import { Label } from '@welcome-ui/label'
import { Stack } from '@welcome-ui/stack'

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
