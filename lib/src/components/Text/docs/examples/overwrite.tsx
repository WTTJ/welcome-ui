import { Text } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <>
      <Text as="p" mb="xl" mt="0" variant="h3">
        p tag styled as an H3
      </Text>
      <Text as="h1" variant="sm">
        H1 tag styled as a sm
      </Text>
    </>
  )
}

export default Example
