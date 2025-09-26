import * as React from 'react'

import { Tag } from '@/components/Tag'
import { Text } from '@/components/Text'

const Example = () => {
  const [isHide, setHide] = React.useState(false)

  return isHide ? (
    <Text className="text-red-70 font-bold m-0">Tag removed</Text>
  ) : (
    <Tag onRemove={() => setHide(true)}>Example of a removable tag</Tag>
  )
}

export default Example
