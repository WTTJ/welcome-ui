import * as React from 'react'
import { Avatar } from '@welcome-ui/avatar'

const Example = () => {
  return (
    <>
      <Avatar name="Welcome jungle" size="sm" />
      <Avatar name="Welcome t jungle" />
      <Avatar name="Welcome to jungle" size="lg" />
      <Avatar name="Welcome to t Jungle" size="xl" />
      <Avatar name="Welcome to the jungle" size="xxl" />
      <Avatar color="warning-30" fontSize={20} h={130} name="Custom" w={130} />
    </>
  )
}

export default Example
