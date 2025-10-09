import * as React from 'react'

import { Icon } from '@/components/Icon'
import { Toggle } from '@/components/Toggle'

const Example = () => {
  const [toggle, setToggle] = React.useState(false)

  return (
    <Toggle
      aria-label="Toggle component"
      checked={toggle}
      checkedIcon={<Icon name="eye-slash" />}
      onClick={() => setToggle(!toggle)}
      size="md"
      uncheckedIcon={<Icon name="eye" />}
    />
  )
}

export default Example
