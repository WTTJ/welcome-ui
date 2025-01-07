import { Checkbox, Field, Stack } from 'welcome-ui'
import * as React from 'react'

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
