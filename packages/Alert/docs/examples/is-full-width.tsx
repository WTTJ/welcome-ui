import * as React from 'react'
import { Alert } from '@welcome-ui/alert'

const Example = () => {
  return (
    <Alert cta={<Alert.Button variant="secondary">Button</Alert.Button>} isFullWidth>
      <Alert.Title>Welcome to the jungle</Alert.Title>
    </Alert>
  )
}

export default Example
