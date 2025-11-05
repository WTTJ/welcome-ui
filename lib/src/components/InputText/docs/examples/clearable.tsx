import { useState } from 'react'

import { Icon } from '@/components/Icon'
import { InputText } from '@/components/InputText'

const Example = () => {
  const [value, setValue] = useState('Welcome')
  return (
    <InputText
      icon={<Icon name="user-circle" />}
      iconPlacement="right"
      isClearable
      onChange={e => setValue(e.target.value)}
      placeholder="Welcome"
      value={value}
    />
  )
}

export default Example
