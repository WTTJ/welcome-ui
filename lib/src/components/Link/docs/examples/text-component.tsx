import * as React from 'react'
import { Link } from 'welcome-ui/Link'
import { Text } from 'welcome-ui/Text'

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
