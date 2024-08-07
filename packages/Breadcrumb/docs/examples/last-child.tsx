import * as React from 'react'
import { Breadcrumb } from '@welcome-ui/breadcrumb'

const Example = () => {
  return (
    <Breadcrumb lastChildNotClickable={false}>
      <Breadcrumb.Item href="/">Introduction</Breadcrumb.Item>
      <Breadcrumb.Item href="/">Components</Breadcrumb.Item>
      <Breadcrumb.Item href="/">Breadcrumb</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Example
