import * as React from 'react'
import { Tag } from '@welcome-ui/react'

const Example = () => {
  const [isHide, setHide] = React.useState(false)

  return isHide ? (
    'Tag removed'
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
