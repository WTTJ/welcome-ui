import * as React from 'react'
import { Checkbox } from '@/Checkbox'
import { Field } from '@/Field'

const Example = () => {
  const [checkbox, setCheckbox] = React.useState(false)

  return (
    <Field hint="A hint" label="default">
      <Checkbox checked={checkbox} name="default-hint" onChange={() => setCheckbox(!checkbox)} />
    </Field>
  )
}

export default Example
