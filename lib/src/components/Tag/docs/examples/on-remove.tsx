import * as React from 'react'

import { Tag } from '@/components/Tag'
import { Text } from '@/components/Text'

const Example = () => {
  const [isHide, setHide] = React.useState(false)

  return isHide ? (
    <Text className="nine:text-red-70 nine:font-bold nine:m-0">Tag removed</Text>
  ) : (
    <Tag onRemove={() => setHide(true)}>Example of a removable tag</Tag>
  )
}

export default Example
