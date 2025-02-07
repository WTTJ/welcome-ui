import * as React from 'react'

import { Alert } from '@/Alert'

const Example = () => {
  return (
    <>
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
      <Alert
        cta={
          <>
            <Alert.Button> AI Button</Alert.Button>
            <Alert.SecondaryButton> AI Button</Alert.SecondaryButton>
          </>
        }
        variant="ai"
      >
        <Alert.Title>Welcome to the jungle</Alert.Title>
        <span>
          Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
          ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
          ornare.
        </span>
      </Alert>
    </>
  )
}

export default Example
