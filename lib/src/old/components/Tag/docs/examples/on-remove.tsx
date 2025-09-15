import * as React from 'react'

import { Tag } from '@old/Tag'
import { Text } from '@old/Text'

const Example = () => {
  const [isHide, setHide] = React.useState(false)

  return isHide ? (
    <Text color="red-70" fontSize="sm" fontWeight="bold" m={0}>
      Tag removed
    </Text>
  ) : (
    <Tag onRemove={() => setHide(true)}>Example of a removable tag</Tag>
  )
}

export default Example
