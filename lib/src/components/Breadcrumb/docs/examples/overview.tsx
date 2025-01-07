import { Breadcrumb } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Introduction</Breadcrumb.Item>
      <Breadcrumb.Item href="/">Components</Breadcrumb.Item>
      <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Example
