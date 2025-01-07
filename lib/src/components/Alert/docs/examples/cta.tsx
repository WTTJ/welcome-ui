import { Alert } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
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
  )
}

export default Example
