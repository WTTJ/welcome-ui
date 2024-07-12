import * as React from 'react'
import { Alert } from '@welcome-ui/alert'
import { Stack } from '@welcome-ui/stack'
import { HeartIcon } from '@welcome-ui/icons'

const Example = () => {
  return (
    <Stack>
      <Alert>
        <Alert.Title>Welcome to the jungle</Alert.Title>
      </Alert>
      <Alert icon={<HeartIcon />}>
        <Alert.Title>Welcome to the jungle</Alert.Title>
      </Alert>
      <Alert icon={null}>
        <Alert.Title>Welcome to the jungle</Alert.Title>
      </Alert>
    </Stack>
  )
}

export default Example
