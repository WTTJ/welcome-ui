import { Label } from '@/Label'
import { Stack } from '@/Stack'

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
