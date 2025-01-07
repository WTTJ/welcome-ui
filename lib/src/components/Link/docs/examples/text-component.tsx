import { Link, Text } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <Text variant="h5">
      A text with h5{' '}
      <Link fontWeight="inherit" href="#" target="_blank">
        variant
      </Link>
    </Text>
  )
}

export default Example
