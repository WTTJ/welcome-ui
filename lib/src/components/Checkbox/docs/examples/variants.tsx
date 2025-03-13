import * as React from 'react'
import { Checkbox } from '@/Checkbox'
import { Field } from '@/Field'
import { Stack } from '@/Stack'

const Example = () => {
  const [checkbox, setCheckbox] = React.useState(false)

  return (
    <Stack>
      <Field error="error" label="error">
        <Checkbox
          checked={checkbox}
          name="default-variant"
          onChange={() => setCheckbox(!checkbox)}
        />
      </Field>
      <Field label="warning" warning="warning">
        <Checkbox
          checked={checkbox}
          name="default-variant"
          onChange={() => setCheckbox(!checkbox)}
        />
      </Field>
      <Field label="success" success="success">
        <Checkbox
          checked={checkbox}
          name="default-variant"
          onChange={() => setCheckbox(!checkbox)}
        />
      </Field>
    </Stack>
  )
}

export default Example
