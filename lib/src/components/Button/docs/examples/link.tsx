import * as React from 'react'

import { Button } from '@/Button'
import { WttjIcon } from '@/Icons'

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
