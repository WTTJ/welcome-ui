import * as React from 'react'
import { Tag } from '@welcome-ui/tag'

const Example = () => {
  return (
    <>
      <Tag as="a" href="#" onClick={() => alert('clicked')}>
        Default
      </Tag>
      <Tag as="a" href="#" onClick={() => alert('clicked')} variant="success">
        State
      </Tag>
      <Tag as="a" href="#" onClick={() => alert('clicked')} variant="blue">
        Secondary
      </Tag>
    </>
  )
}

export default Example
