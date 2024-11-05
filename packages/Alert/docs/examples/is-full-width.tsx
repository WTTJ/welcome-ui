import * as React from 'react'
import { Alert } from '@welcome-ui/alert'

const Example = () => {
  return (
    <Alert cta={<Alert.PrimaryAction>Button</Alert.PrimaryAction>} isFullWidth>
      <Alert.Title>Welcome to the jungle</Alert.Title>
      Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
      ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a ornare.
    </Alert>
  )
}

export default Example
