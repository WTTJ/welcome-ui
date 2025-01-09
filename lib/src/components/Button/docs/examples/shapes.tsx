import { Button, WttjIcon } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <>
      <Button shape="square" size="xs">
        <WttjIcon />
      </Button>
      <Button shape="circle" size="xs">
        <WttjIcon />
      </Button>
      <Button shape="square" size="sm">
        <WttjIcon />
      </Button>
      <Button shape="circle" size="sm">
        <WttjIcon />
      </Button>
      <Button shape="square">
        <WttjIcon />
      </Button>
      <Button shape="circle">
        <WttjIcon />
      </Button>
      <Button shape="square" size="lg">
        <WttjIcon />
      </Button>
      <Button shape="circle" size="lg">
        <WttjIcon />
      </Button>
    </>
  )
}

export default Example
