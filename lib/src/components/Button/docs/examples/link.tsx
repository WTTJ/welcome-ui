import { Button, WttjIcon } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <Button
      as="a"
      href="https://www.welcometothejungle.com"
      rel="noopener nofollow"
      target="_blank"
    >
      <WttjIcon />
      <span>Welcome</span>
    </Button>
  )
}

export default Example
