import { useState } from 'react'

import { AvatarIcon } from '@/components/Icon'
import { InputText } from '@/components/InputText'

const Example = () => {
  const [value, setValue] = useState('Welcome')
  return (
    <InputText
      icon={<AvatarIcon />}
      iconPlacement="right"
      isClearable
      onChange={e => setValue(e.target.value)}
      placeholder="Welcome"
      value={value}
    />
  )
}

export default Example
