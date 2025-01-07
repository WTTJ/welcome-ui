import { Checkbox, Field } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  const [checkbox, setCheckbox] = React.useState(false)

  return (
    <Field hint="A hint" label="default">
      <Checkbox checked={checkbox} name="default-hint" onChange={() => setCheckbox(!checkbox)} />
    </Field>
  )
}

export default Example
