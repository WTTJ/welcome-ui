import * as React from 'react'
import { Tag } from '@welcome-ui/tag'

const Example = () => {
  return (
    <Tag as="a" href="#" onClick={() => alert('clicked')} size="xs">
      Clickable tag
    </Tag>
  )
}

export default Example
