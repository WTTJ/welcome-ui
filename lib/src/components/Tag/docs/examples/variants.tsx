import * as React from 'react'

import { Tag } from '@/Tag'
import { Stack } from '@/Stack'

const Example = () => {
  return (
    <Stack>
      <Tag>Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="info">Info</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="danger">Danger</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="ai">AI</Tag>
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
