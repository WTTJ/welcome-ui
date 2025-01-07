import { Tag, Text } from 'welcome-ui'
import * as React from 'react'

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
