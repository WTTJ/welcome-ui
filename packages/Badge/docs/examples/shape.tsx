import * as React from 'react'
import { Badge } from '@welcome-ui/badge'

const Example = () => {
  return (
    <>
      <Badge>{1}</Badge>
      <Badge>{100}</Badge>
      <Badge shape="square">{1}</Badge>
      <Badge shape="square">{100}</Badge>
    </>
  )
}

export default Example
