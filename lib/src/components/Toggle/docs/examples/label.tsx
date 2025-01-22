import * as React from 'react'
import { Toggle } from 'welcome-ui/Toggle'
import { Field } from 'welcome-ui/Field'
import { Stack } from 'welcome-ui/Stack'

const Example = () => {
  const [toggle, setToggle] = React.useState(false)

  return (
    <Stack gap="xl">
      <Field label="Toggle">
        <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
      </Field>
      <Field disabled label="Toggle">
        <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
      </Field>
    </Stack>
  )
}

export default Example
