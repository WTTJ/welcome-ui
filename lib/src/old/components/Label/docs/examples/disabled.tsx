import { Label } from '@old/Label'
import { Stack } from '@old/Stack'

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
