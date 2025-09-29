import * as React from 'react'

import { Field } from '@/components/Field'
import { Toggle } from '@/components/Toggle'

const Example = () => {
  const [toggle, setToggle] = React.useState(false)

  return (
    <Field hint="a hint" inline label="Toggle">
      <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
    </Field>
  )
}

export default Example
