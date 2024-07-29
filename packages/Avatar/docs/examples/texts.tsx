import * as React from 'react'
import { Avatar } from '@welcome-ui/avatar'

const Example = () => {
  return (
    <>
      <Avatar name="Welcomed jungle" size="sm" />
      <Avatar name="Welcomdse jungle" />
      <Avatar name="Welcodsdme jungle" size="lg" />
      <Avatar name="Welcome jungle" size="xl" />
      <Avatar name="Welcome jungle" size="xxl" />
      <Avatar color="warning-50" fontSize={20} h={130} name="Custom" w={130} />
    </>
  )
}

export default Example
