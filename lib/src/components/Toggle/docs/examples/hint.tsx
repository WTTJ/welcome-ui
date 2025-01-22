import * as React from 'react'
import { Toggle } from '@welcome-ui/toggle'
import { Field } from '@welcome-ui/field'

const Example = () => {
  const [toggle, setToggle] = React.useState(false)

  return (
    <Field hint="a hint" label="Toggle">
      <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
    </Field>
  )
}

export default Example
