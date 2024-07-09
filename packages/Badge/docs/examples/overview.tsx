import * as React from 'react'
import { Badge } from '@welcome-ui/badge'

const Example = () => {
  return (
    <>
      <Badge>{1}</Badge>
      <Badge>New</Badge>
      <Badge shape="square" variant="primary">
        1
      </Badge>
      <Badge shape="square" variant="primary">
        New
      </Badge>
    </>
  )
}

export default Example
