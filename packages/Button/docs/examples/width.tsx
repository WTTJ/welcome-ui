import * as React from 'react'
import { Button } from '@welcome-ui/button'

const Example = () => {
  return (
    <>
      <Button w="100%">full width</Button>
      <Button w={1 / 2}>half width</Button>
    </>
  )
}

export default Example
