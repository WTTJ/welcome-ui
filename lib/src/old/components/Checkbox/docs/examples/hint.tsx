import * as React from 'react'

import { Checkbox } from '@old/Checkbox'
import { Field } from '@old/Field'

const Example = () => {
  const [checkbox, setCheckbox] = React.useState(false)

  return (
    <Field hint="A hint" label="default">
      <Checkbox checked={checkbox} name="default-hint" onChange={() => setCheckbox(!checkbox)} />
    </Field>
  )
}

export default Example
