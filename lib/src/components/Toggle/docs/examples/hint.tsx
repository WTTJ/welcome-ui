import * as React from 'react'

import { Toggle } from '@/Toggle'
import { Field } from '@/Field'

const Example = () => {
  const [toggle, setToggle] = React.useState(false)

  return (
    <Field hint="a hint" label="Toggle">
      <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
    </Field>
  )
}

export default Example
