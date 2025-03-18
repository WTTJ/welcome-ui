import { useState } from 'react'

import { Field } from '@/Field'
import { Toggle } from '@/Toggle'

const Example = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <Field hint="a hint" label="Toggle">
      <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
    </Field>
  )
}

export default Example
