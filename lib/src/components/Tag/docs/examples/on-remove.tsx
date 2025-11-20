import * as React from 'react'

import { Icon } from '@/components/Icon'
import { Tag } from '@/components/Tag'

const Example = () => {
  const [isHide, setHide] = React.useState(false)

  return isHide ? (
    <Tag icon={<Icon name="exclamation-triangle" />} variant="red">
      Tag removed
    </Tag>
  ) : (
    <Tag onRemove={() => setHide(true)}>Removable tag</Tag>
  )
}

export default Example
