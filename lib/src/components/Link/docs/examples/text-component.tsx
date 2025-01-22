import * as React from 'react'
import { Link } from '@welcome-ui/link'
import { Text } from '@welcome-ui/text'

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
