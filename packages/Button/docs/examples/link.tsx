import * as React from 'react'
import { Button } from '@welcome-ui/button'
import { WttjIcon } from '@welcome-ui/icons'

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
