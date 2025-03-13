
import { Label } from '@/Label'
import { Stack } from '@/Stack'

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
