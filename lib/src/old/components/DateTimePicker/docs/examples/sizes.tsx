import { DateTimePicker } from '@old/DateTimePicker'
import { Stack } from '@old/Stack'

const Example = () => {
  return (
    <Stack>
      <DateTimePicker name="welcome" size="xs" value={new Date()} />
      <DateTimePicker name="welcome" size="sm" value={new Date()} />
      <DateTimePicker name="welcome" value={new Date()} />
      <DateTimePicker name="welcome" size="lg" value={new Date()} />
    </Stack>
  )
}

export default Example
