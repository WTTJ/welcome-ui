import * as React from 'react'
import { Loader } from 'welcome-ui/Loader'
import { Stack } from 'welcome-ui/Stack'

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
