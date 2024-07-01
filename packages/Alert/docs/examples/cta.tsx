import * as React from 'react'
import { Alert } from '@welcome-ui/alert'
import { Stack } from '@welcome-ui/stack'
import { Icons } from '@welcome-ui/icons.font'

const Example = () => {
  return (
    <Stack>
      <Alert cta={<Alert.Button variant="secondary">Button</Alert.Button>}>
        <Alert.Title>Welcome to the jungle</Alert.Title>
        <span>
          Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
          ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
          ornare.
        </span>
      </Alert>
      <Alert cta={<Alert.Button variant="secondary">Button</Alert.Button>}>
        <Alert.Title>Welcome to the jungle</Alert.Title>
      </Alert>
      <Alert cta={<Icons.Check />} isFullWidth>
        <Alert.Title>Welcome to the jungle</Alert.Title>
      </Alert>
    </Stack>
  )
}

export default Example
