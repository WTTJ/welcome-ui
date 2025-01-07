import { Field, Toggle } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  const [toggle, setToggle] = React.useState(false)

  return (
    <Field hint="a hint" label="Toggle">
      <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
    </Field>
  )
}

export default Example
