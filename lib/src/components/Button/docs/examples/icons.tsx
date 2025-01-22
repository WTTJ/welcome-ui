import * as React from 'react'
import { Button } from '@welcome-ui/button'
import { WttjIcon } from '@welcome-ui/icons'

const Example = () => {
  return (
    <>
      <Button>
        <WttjIcon />
        <span>Button</span>
      </Button>
      <Button variant="secondary">
        <WttjIcon />
        <span>Button</span>
      </Button>
      <Button variant="tertiary">
        <WttjIcon />
        <span>Button</span>
      </Button>
      <Button disabled>
        <WttjIcon />
        <span>Button</span>
      </Button>
    </>
  )
}

export default Example
