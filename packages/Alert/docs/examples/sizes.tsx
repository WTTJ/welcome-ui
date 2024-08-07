import * as React from 'react'
import { Alert } from '@welcome-ui/alert'
import { Stack } from '@welcome-ui/stack'

const Example = () => {
  return (
    <Stack>
      <Alert>
        <Alert.Title>Default size</Alert.Title>
        <span>
          Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
          ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
          ornare.
        </span>
      </Alert>
      <Alert size="md">
        <Alert.Title>Medium size</Alert.Title>
        <span>
          Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
          ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
          ornare.
        </span>
      </Alert>
    </Stack>
  )
}

export default Example
