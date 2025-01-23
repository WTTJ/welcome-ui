import * as React from 'react'

import { Button } from '@/Button'

const Example = () => {
  return (
    <>
      <Button danger>Primary</Button>
      <Button danger variant="tertiary">
        Tertiary
      </Button>
      <Button danger variant="ghost">
        Ghost
      </Button>
    </>
  )
}

export default Example
