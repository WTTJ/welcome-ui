import * as React from 'react'
import { Alert } from '@welcome-ui/alert'
import { Stack } from '@welcome-ui/stack'

const Example = () => {
  return (
    <Stack>
      <Alert cta={<Alert.Button>Button</Alert.Button>}>
        <Alert.Title>Welcome to the jungle</Alert.Title>
        <span>
          Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
          ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
          ornare.
        </span>
      </Alert>
      <Alert
        cta={
          <>
            <Alert.Button>Button</Alert.Button>
            <Alert.SecondaryButton>Button</Alert.SecondaryButton>
          </>
        }
      >
        <Alert.Title>Welcome to the jungle</Alert.Title>
        <span>
          Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
          ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
          ornare.
        </span>
      </Alert>
      <Alert cta={<Alert.Button>Button</Alert.Button>} ctaPosition="bottom">
        <Alert.Title>Welcome to the jungle</Alert.Title>
        <span>
          Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
          ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
          ornare.
        </span>
      </Alert>
      <Alert
        cta={
          <>
            <Alert.Button>Button</Alert.Button>
            <Alert.SecondaryButton>Button</Alert.SecondaryButton>
          </>
        }
        ctaPosition="bottom"
      >
        <Alert.Title>Welcome to the jungle</Alert.Title>
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
