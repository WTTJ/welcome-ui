import * as React from 'react'
import { Tag } from '@welcome-ui/tag'
import { Text } from '@welcome-ui/text'

const Example = () => {
  const [isHide, setHide] = React.useState(false)

  return isHide ? (
    <Text color="danger-50" fontSize="sm" fontWeight="bold" m={0}>
      Tag removed
    </Text>
  ) : (
    <>
      <Tag onRemove={() => setHide(true)}>Example of remove tag</Tag>
      <Tag onRemove={() => setHide(true)} size="sm">
        small
      </Tag>
      <Tag onRemove={() => setHide(true)} variant="success">
        success
      </Tag>
    </>
  )
}

export default Example
