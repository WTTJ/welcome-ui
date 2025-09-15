import { Loader } from '@old/Loader'
import { Stack } from '@old/Stack'

const Example = () => {
  return (
    <Stack spacing="xl">
      <Loader size="xs" />
      <Loader />
      <Loader size="md" />
      <Loader size="lg" />
      <Loader size="40px" />
      <Loader size={50} />
    </Stack>
  )
}

export default Example
