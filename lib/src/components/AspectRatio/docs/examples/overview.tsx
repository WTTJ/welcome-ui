import { AspectRatio, Box } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <AspectRatio maxWidth={200}>
      <Box
        as="img"
        src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      />
    </AspectRatio>
  )
}

export default Example
