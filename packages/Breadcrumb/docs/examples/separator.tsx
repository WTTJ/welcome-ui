import * as React from 'react'
import { Breadcrumb } from '@welcome-ui/breadcrumb'
import { Stack } from '@welcome-ui/stack'

const Example = () => {
  return (
    <Stack>
      <Breadcrumb separator="/">
        <Breadcrumb.Item href="/">Introduction</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Components</Breadcrumb.Item>
        <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb separator="-">
        <Breadcrumb.Item href="/">Introduction</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Components</Breadcrumb.Item>
        <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
      </Breadcrumb>
    </Stack>
  )
}

export default Example
