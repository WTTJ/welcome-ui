import * as React from 'react'
import { Tag } from '@welcome-ui/tag'
import { Stack } from '@welcome-ui/stack'

const Example = () => {
  return (
    <Stack>
      <Tag>Default</Tag>
      <Tag variant="info">Info</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="danger">Danger</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="blue">Blue</Tag>
      <Tag variant="green">Green</Tag>
      <Tag variant="orange">Orange</Tag>
      <Tag variant="pink">Pink</Tag>
      <Tag variant="teal">Teal</Tag>
      <Tag variant="violet">Violet</Tag>
    </Stack>
  )
}

export default Example
