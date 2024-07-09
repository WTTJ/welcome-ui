import * as React from 'react'
import { Checkbox } from '@welcome-ui/checkbox'
import { Field } from '@welcome-ui/field'
import { Stack } from '@welcome-ui/stack'

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
      <Field info="info" label="info">
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
