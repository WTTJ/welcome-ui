import * as React from 'react'
import { Avatar } from '@welcome-ui/avatar'

const Example = () => {
  return (
    <>
      <Avatar name="Welcome Jungle" size="sm" />
      <Avatar name="Welcome Jungle" />
      <Avatar name="Welcome Jungle" size="lg" />
      <Avatar name="Welcome Jungle" size="xl" />
      <Avatar name="Welcome Jungle" size="xxl" />
      <Avatar color="warning-50" fontSize={20} h={130} name="Custom" w={130} />
    </>
  )
}

export default Example
